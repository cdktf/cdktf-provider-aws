// https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/data-sources/redshift_producer_data_shares
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsRedshiftProducerDataSharesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/data-sources/redshift_producer_data_shares#producer_arn DataAwsRedshiftProducerDataShares#producer_arn}
  */
  readonly producerArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/data-sources/redshift_producer_data_shares#status DataAwsRedshiftProducerDataShares#status}
  */
  readonly status?: string;
  /**
  * data_shares block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/data-sources/redshift_producer_data_shares#data_shares DataAwsRedshiftProducerDataShares#data_shares}
  */
  readonly dataShares?: DataAwsRedshiftProducerDataSharesDataShares[] | cdktf.IResolvable;
}
export interface DataAwsRedshiftProducerDataSharesDataShares {
}

export function dataAwsRedshiftProducerDataSharesDataSharesToTerraform(struct?: DataAwsRedshiftProducerDataSharesDataShares | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsRedshiftProducerDataSharesDataSharesToHclTerraform(struct?: DataAwsRedshiftProducerDataSharesDataShares | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsRedshiftProducerDataSharesDataSharesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsRedshiftProducerDataSharesDataShares | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsRedshiftProducerDataSharesDataShares | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // data_share_arn - computed: true, optional: false, required: false
  public get dataShareArn() {
    return this.getStringAttribute('data_share_arn');
  }

  // managed_by - computed: true, optional: false, required: false
  public get managedBy() {
    return this.getStringAttribute('managed_by');
  }

  // producer_arn - computed: true, optional: false, required: false
  public get producerArn() {
    return this.getStringAttribute('producer_arn');
  }
}

export class DataAwsRedshiftProducerDataSharesDataSharesList extends cdktf.ComplexList {
  public internalValue? : DataAwsRedshiftProducerDataSharesDataShares[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsRedshiftProducerDataSharesDataSharesOutputReference {
    return new DataAwsRedshiftProducerDataSharesDataSharesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/data-sources/redshift_producer_data_shares aws_redshift_producer_data_shares}
*/
export class DataAwsRedshiftProducerDataShares extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_redshift_producer_data_shares";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsRedshiftProducerDataShares resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsRedshiftProducerDataShares to import
  * @param importFromId The id of the existing DataAwsRedshiftProducerDataShares that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/data-sources/redshift_producer_data_shares#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsRedshiftProducerDataShares to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_redshift_producer_data_shares", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/data-sources/redshift_producer_data_shares aws_redshift_producer_data_shares} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsRedshiftProducerDataSharesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsRedshiftProducerDataSharesConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_producer_data_shares',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.54.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._producerArn = config.producerArn;
    this._status = config.status;
    this._dataShares.internalValue = config.dataShares;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // producer_arn - computed: false, optional: false, required: true
  private _producerArn?: string; 
  public get producerArn() {
    return this.getStringAttribute('producer_arn');
  }
  public set producerArn(value: string) {
    this._producerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get producerArnInput() {
    return this._producerArn;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // data_shares - computed: false, optional: true, required: false
  private _dataShares = new DataAwsRedshiftProducerDataSharesDataSharesList(this, "data_shares", false);
  public get dataShares() {
    return this._dataShares;
  }
  public putDataShares(value: DataAwsRedshiftProducerDataSharesDataShares[] | cdktf.IResolvable) {
    this._dataShares.internalValue = value;
  }
  public resetDataShares() {
    this._dataShares.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSharesInput() {
    return this._dataShares.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      producer_arn: cdktf.stringToTerraform(this._producerArn),
      status: cdktf.stringToTerraform(this._status),
      data_shares: cdktf.listMapper(dataAwsRedshiftProducerDataSharesDataSharesToTerraform, true)(this._dataShares.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      producer_arn: {
        value: cdktf.stringToHclTerraform(this._producerArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_shares: {
        value: cdktf.listMapperHcl(dataAwsRedshiftProducerDataSharesDataSharesToHclTerraform, true)(this._dataShares.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsRedshiftProducerDataSharesDataSharesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
