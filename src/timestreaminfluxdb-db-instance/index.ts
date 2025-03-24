// https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TimestreaminfluxdbDbInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The amount of storage to allocate for your DB storage type in GiB (gibibytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance#allocated_storage TimestreaminfluxdbDbInstance#allocated_storage}
  */
  readonly allocatedStorage: number;
  /**
  * The name of the initial InfluxDB bucket. All InfluxDB data is stored in a bucket. 
  * 					A bucket combines the concept of a database and a retention period (the duration of time 
  * 					that each data point persists). A bucket belongs to an organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance#bucket TimestreaminfluxdbDbInstance#bucket}
  */
  readonly bucket: string;
  /**
  * The Timestream for InfluxDB DB instance type to run InfluxDB on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance#db_instance_type TimestreaminfluxdbDbInstance#db_instance_type}
  */
  readonly dbInstanceType: string;
  /**
  * The id of the DB parameter group assigned to your DB instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance#db_parameter_group_identifier TimestreaminfluxdbDbInstance#db_parameter_group_identifier}
  */
  readonly dbParameterGroupIdentifier?: string;
  /**
  * The Timestream for InfluxDB DB storage type to read and write InfluxDB data. 
  * 					You can choose between 3 different types of provisioned Influx IOPS included storage according 
  * 					to your workloads requirements: Influx IO Included 3000 IOPS, Influx IO Included 12000 IOPS, 
  * 					Influx IO Included 16000 IOPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance#db_storage_type TimestreaminfluxdbDbInstance#db_storage_type}
  */
  readonly dbStorageType?: string;
  /**
  * Specifies whether the DB instance will be deployed as a standalone instance or 
  * 					with a Multi-AZ standby for high availability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance#deployment_type TimestreaminfluxdbDbInstance#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * The name that uniquely identifies the DB instance when interacting with the 
  * 					Amazon Timestream for InfluxDB API and CLI commands. This name will also be a 
  * 					prefix included in the endpoint. DB instance names must be unique per customer 
  * 					and per region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance#name TimestreaminfluxdbDbInstance#name}
  */
  readonly name: string;
  /**
  * Specifies whether the networkType of the Timestream for InfluxDB instance is 
  * 					IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate 
  * 					over both IPv4 and IPv6 protocols.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance#network_type TimestreaminfluxdbDbInstance#network_type}
  */
  readonly networkType?: string;
  /**
  * The name of the initial organization for the initial admin user in InfluxDB. An 
  * 					InfluxDB organization is a workspace for a group of users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance#organization TimestreaminfluxdbDbInstance#organization}
  */
  readonly organization: string;
  /**
  * The password of the initial admin user created in InfluxDB. This password will 
  * 					allow you to access the InfluxDB UI to perform various administrative tasks and 
  * 					also use the InfluxDB CLI to create an operator token. These attributes will be 
  * 					stored in a Secret created in AWS SecretManager in your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance#password TimestreaminfluxdbDbInstance#password}
  */
  readonly password: string;
  /**
  * The port number on which InfluxDB accepts connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance#port TimestreaminfluxdbDbInstance#port}
  */
  readonly port?: number;
  /**
  * Configures the DB instance with a public IP to facilitate access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance#publicly_accessible TimestreaminfluxdbDbInstance#publicly_accessible}
  */
  readonly publiclyAccessible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance#tags TimestreaminfluxdbDbInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The username of the initial admin user created in InfluxDB. 
  * 					Must start with a letter and can't end with a hyphen or contain two 
  * 					consecutive hyphens. For example, my-user1. This username will allow 
  * 					you to access the InfluxDB UI to perform various administrative tasks 
  * 					and also use the InfluxDB CLI to create an operator token. These 
  * 					attributes will be stored in a Secret created in Amazon Secrets 
  * 					Manager in your account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance#username TimestreaminfluxdbDbInstance#username}
  */
  readonly username: string;
  /**
  * A list of VPC security group IDs to associate with the DB instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance#vpc_security_group_ids TimestreaminfluxdbDbInstance#vpc_security_group_ids}
  */
  readonly vpcSecurityGroupIds: string[];
  /**
  * A list of VPC subnet IDs to associate with the DB instance. Provide at least 
  * 					two VPC subnet IDs in different availability zones when deploying with a Multi-AZ standby.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance#vpc_subnet_ids TimestreaminfluxdbDbInstance#vpc_subnet_ids}
  */
  readonly vpcSubnetIds: string[];
  /**
  * log_delivery_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance#log_delivery_configuration TimestreaminfluxdbDbInstance#log_delivery_configuration}
  */
  readonly logDeliveryConfiguration?: TimestreaminfluxdbDbInstanceLogDeliveryConfiguration[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance#timeouts TimestreaminfluxdbDbInstance#timeouts}
  */
  readonly timeouts?: TimestreaminfluxdbDbInstanceTimeouts;
}
export interface TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration {
  /**
  * The name of the S3 bucket to deliver logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance#bucket_name TimestreaminfluxdbDbInstance#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Indicates whether log delivery to the S3 bucket is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance#enabled TimestreaminfluxdbDbInstance#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function timestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationToTerraform(struct?: TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function timestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationToHclTerraform(struct?: TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._enabled = value.enabled;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList extends cdktf.ComplexList {
  public internalValue? : TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration[] | cdktf.IResolvable

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
  public get(index: number): TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference {
    return new TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreaminfluxdbDbInstanceLogDeliveryConfiguration {
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance#s3_configuration TimestreaminfluxdbDbInstance#s3_configuration}
  */
  readonly s3Configuration?: TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration[] | cdktf.IResolvable;
}

export function timestreaminfluxdbDbInstanceLogDeliveryConfigurationToTerraform(struct?: TimestreaminfluxdbDbInstanceLogDeliveryConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_configuration: cdktf.listMapper(timestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationToTerraform, true)(struct!.s3Configuration),
  }
}


export function timestreaminfluxdbDbInstanceLogDeliveryConfigurationToHclTerraform(struct?: TimestreaminfluxdbDbInstanceLogDeliveryConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_configuration: {
      value: cdktf.listMapperHcl(timestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationToHclTerraform, true)(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TimestreaminfluxdbDbInstanceLogDeliveryConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreaminfluxdbDbInstanceLogDeliveryConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Configuration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Configuration.internalValue = value.s3Configuration;
    }
  }

  // s3_configuration - computed: false, optional: true, required: false
  private _s3Configuration = new TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3ConfigurationList(this, "s3_configuration", false);
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: TimestreaminfluxdbDbInstanceLogDeliveryConfigurationS3Configuration[] | cdktf.IResolvable) {
    this._s3Configuration.internalValue = value;
  }
  public resetS3Configuration() {
    this._s3Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }
}

export class TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList extends cdktf.ComplexList {
  public internalValue? : TimestreaminfluxdbDbInstanceLogDeliveryConfiguration[] | cdktf.IResolvable

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
  public get(index: number): TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference {
    return new TimestreaminfluxdbDbInstanceLogDeliveryConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TimestreaminfluxdbDbInstanceTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance#create TimestreaminfluxdbDbInstance#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance#delete TimestreaminfluxdbDbInstance#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance#update TimestreaminfluxdbDbInstance#update}
  */
  readonly update?: string;
}

export function timestreaminfluxdbDbInstanceTimeoutsToTerraform(struct?: TimestreaminfluxdbDbInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function timestreaminfluxdbDbInstanceTimeoutsToHclTerraform(struct?: TimestreaminfluxdbDbInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TimestreaminfluxdbDbInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TimestreaminfluxdbDbInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TimestreaminfluxdbDbInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance aws_timestreaminfluxdb_db_instance}
*/
export class TimestreaminfluxdbDbInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_timestreaminfluxdb_db_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TimestreaminfluxdbDbInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TimestreaminfluxdbDbInstance to import
  * @param importFromId The id of the existing TimestreaminfluxdbDbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TimestreaminfluxdbDbInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_timestreaminfluxdb_db_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/timestreaminfluxdb_db_instance aws_timestreaminfluxdb_db_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TimestreaminfluxdbDbInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: TimestreaminfluxdbDbInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_timestreaminfluxdb_db_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.92.0',
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
    this._allocatedStorage = config.allocatedStorage;
    this._bucket = config.bucket;
    this._dbInstanceType = config.dbInstanceType;
    this._dbParameterGroupIdentifier = config.dbParameterGroupIdentifier;
    this._dbStorageType = config.dbStorageType;
    this._deploymentType = config.deploymentType;
    this._name = config.name;
    this._networkType = config.networkType;
    this._organization = config.organization;
    this._password = config.password;
    this._port = config.port;
    this._publiclyAccessible = config.publiclyAccessible;
    this._tags = config.tags;
    this._username = config.username;
    this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    this._vpcSubnetIds = config.vpcSubnetIds;
    this._logDeliveryConfiguration.internalValue = config.logDeliveryConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocated_storage - computed: false, optional: false, required: true
  private _allocatedStorage?: number; 
  public get allocatedStorage() {
    return this.getNumberAttribute('allocated_storage');
  }
  public set allocatedStorage(value: number) {
    this._allocatedStorage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedStorageInput() {
    return this._allocatedStorage;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // db_instance_type - computed: false, optional: false, required: true
  private _dbInstanceType?: string; 
  public get dbInstanceType() {
    return this.getStringAttribute('db_instance_type');
  }
  public set dbInstanceType(value: string) {
    this._dbInstanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceTypeInput() {
    return this._dbInstanceType;
  }

  // db_parameter_group_identifier - computed: false, optional: true, required: false
  private _dbParameterGroupIdentifier?: string; 
  public get dbParameterGroupIdentifier() {
    return this.getStringAttribute('db_parameter_group_identifier');
  }
  public set dbParameterGroupIdentifier(value: string) {
    this._dbParameterGroupIdentifier = value;
  }
  public resetDbParameterGroupIdentifier() {
    this._dbParameterGroupIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbParameterGroupIdentifierInput() {
    return this._dbParameterGroupIdentifier;
  }

  // db_storage_type - computed: true, optional: true, required: false
  private _dbStorageType?: string; 
  public get dbStorageType() {
    return this.getStringAttribute('db_storage_type');
  }
  public set dbStorageType(value: string) {
    this._dbStorageType = value;
  }
  public resetDbStorageType() {
    this._dbStorageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbStorageTypeInput() {
    return this._dbStorageType;
  }

  // deployment_type - computed: true, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // influx_auth_parameters_secret_arn - computed: true, optional: false, required: false
  public get influxAuthParametersSecretArn() {
    return this.getStringAttribute('influx_auth_parameters_secret_arn');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_type - computed: true, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // publicly_accessible - computed: true, optional: true, required: false
  private _publiclyAccessible?: boolean | cdktf.IResolvable; 
  public get publiclyAccessible() {
    return this.getBooleanAttribute('publicly_accessible');
  }
  public set publiclyAccessible(value: boolean | cdktf.IResolvable) {
    this._publiclyAccessible = value;
  }
  public resetPubliclyAccessible() {
    this._publiclyAccessible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publiclyAccessibleInput() {
    return this._publiclyAccessible;
  }

  // secondary_availability_zone - computed: true, optional: false, required: false
  public get secondaryAvailabilityZone() {
    return this.getStringAttribute('secondary_availability_zone');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vpc_security_group_ids - computed: false, optional: false, required: true
  private _vpcSecurityGroupIds?: string[]; 
  public get vpcSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc_security_group_ids'));
  }
  public set vpcSecurityGroupIds(value: string[]) {
    this._vpcSecurityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSecurityGroupIdsInput() {
    return this._vpcSecurityGroupIds;
  }

  // vpc_subnet_ids - computed: false, optional: false, required: true
  private _vpcSubnetIds?: string[]; 
  public get vpcSubnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc_subnet_ids'));
  }
  public set vpcSubnetIds(value: string[]) {
    this._vpcSubnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSubnetIdsInput() {
    return this._vpcSubnetIds;
  }

  // log_delivery_configuration - computed: false, optional: true, required: false
  private _logDeliveryConfiguration = new TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList(this, "log_delivery_configuration", false);
  public get logDeliveryConfiguration() {
    return this._logDeliveryConfiguration;
  }
  public putLogDeliveryConfiguration(value: TimestreaminfluxdbDbInstanceLogDeliveryConfiguration[] | cdktf.IResolvable) {
    this._logDeliveryConfiguration.internalValue = value;
  }
  public resetLogDeliveryConfiguration() {
    this._logDeliveryConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDeliveryConfigurationInput() {
    return this._logDeliveryConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TimestreaminfluxdbDbInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TimestreaminfluxdbDbInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocated_storage: cdktf.numberToTerraform(this._allocatedStorage),
      bucket: cdktf.stringToTerraform(this._bucket),
      db_instance_type: cdktf.stringToTerraform(this._dbInstanceType),
      db_parameter_group_identifier: cdktf.stringToTerraform(this._dbParameterGroupIdentifier),
      db_storage_type: cdktf.stringToTerraform(this._dbStorageType),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      name: cdktf.stringToTerraform(this._name),
      network_type: cdktf.stringToTerraform(this._networkType),
      organization: cdktf.stringToTerraform(this._organization),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      publicly_accessible: cdktf.booleanToTerraform(this._publiclyAccessible),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      username: cdktf.stringToTerraform(this._username),
      vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcSecurityGroupIds),
      vpc_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcSubnetIds),
      log_delivery_configuration: cdktf.listMapper(timestreaminfluxdbDbInstanceLogDeliveryConfigurationToTerraform, true)(this._logDeliveryConfiguration.internalValue),
      timeouts: timestreaminfluxdbDbInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocated_storage: {
        value: cdktf.numberToHclTerraform(this._allocatedStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_type: {
        value: cdktf.stringToHclTerraform(this._dbInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_parameter_group_identifier: {
        value: cdktf.stringToHclTerraform(this._dbParameterGroupIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_storage_type: {
        value: cdktf.stringToHclTerraform(this._dbStorageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_type: {
        value: cdktf.stringToHclTerraform(this._deploymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      publicly_accessible: {
        value: cdktf.booleanToHclTerraform(this._publiclyAccessible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpcSecurityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vpc_subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpcSubnetIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      log_delivery_configuration: {
        value: cdktf.listMapperHcl(timestreaminfluxdbDbInstanceLogDeliveryConfigurationToHclTerraform, true)(this._logDeliveryConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TimestreaminfluxdbDbInstanceLogDeliveryConfigurationList",
      },
      timeouts: {
        value: timestreaminfluxdbDbInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TimestreaminfluxdbDbInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
