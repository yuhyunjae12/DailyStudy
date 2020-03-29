package sortStudy;

public class SortArg {

	public static void main(String[] args) {
		
		int [] arr = {5,2,1,4,3};
		
		int [] result = bubleSort(arr);
		
		for(int i =0; i < result.length; i++) {
			
			System.out.print(result[i]);
			
		}
		
	}
	
	public static int[] bubleSort(int [] arr) {
		
		for(int i = 0; i < arr.length - 1; i++) {
			
			for(int j = 0; j < arr.length-1-i; j++) {
				
				if(arr[j] > arr[j + 1]) {
					
					int temp = arr[j + 1];
					arr[j + 1] = arr[j];
					arr[j] = temp;
					
				}
				
			}
			
		}
		
		return arr;
		
	}
	
}
