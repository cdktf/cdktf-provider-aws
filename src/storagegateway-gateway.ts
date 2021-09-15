// https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StoragegatewayGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#activation_key StoragegatewayGateway#activation_key}
  */
  readonly activationKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#average_download_rate_limit_in_bits_per_sec StoragegatewayGateway#average_download_rate_limit_in_bits_per_sec}
  */
  readonly averageDownloadRateLimitInBitsPerSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#average_upload_rate_limit_in_bits_per_sec StoragegatewayGateway#average_upload_rate_limit_in_bits_per_sec}
  */
  readonly averageUploadRateLimitInBitsPerSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#cloudwatch_log_group_arn StoragegatewayGateway#cloudwatch_log_group_arn}
  */
  readonly cloudwatchLogGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#gateway_ip_address StoragegatewayGateway#gateway_ip_address}
  */
  readonly gatewayIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#gateway_name StoragegatewayGateway#gateway_name}
  */
  readonly gatewayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#gateway_timezone StoragegatewayGateway#gateway_timezone}
  */
  readonly gatewayTimezone: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#gateway_type StoragegatewayGateway#gateway_type}
  */
  readonly gatewayType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#gateway_vpc_endpoint StoragegatewayGateway#gateway_vpc_endpoint}
  */
  readonly gatewayVpcEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#medium_changer_type StoragegatewayGateway#medium_changer_type}
  */
  readonly mediumChangerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#smb_file_share_visibility StoragegatewayGateway#smb_file_share_visibility}
  */
  readonly smbFileShareVisibility?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#smb_guest_password StoragegatewayGateway#smb_guest_password}
  */
  readonly smbGuestPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#smb_security_strategy StoragegatewayGateway#smb_security_strategy}
  */
  readonly smbSecurityStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#tags StoragegatewayGateway#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#tags_all StoragegatewayGateway#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#tape_drive_type StoragegatewayGateway#tape_drive_type}
  */
  readonly tapeDriveType?: string;
  /**
  * smb_active_directory_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#smb_active_directory_settings StoragegatewayGateway#smb_active_directory_settings}
  */
  readonly smbActiveDirectorySettings?: StoragegatewayGatewaySmbActiveDirectorySettings[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#timeouts StoragegatewayGateway#timeouts}
  */
  readonly timeouts?: StoragegatewayGatewayTimeouts;
}
export class StoragegatewayGatewayGatewayNetworkInterface extends cdktf.ComplexComputedList {

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
}
export interface StoragegatewayGatewaySmbActiveDirectorySettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#domain_controllers StoragegatewayGateway#domain_controllers}
  */
  readonly domainControllers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#domain_name StoragegatewayGateway#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#organizational_unit StoragegatewayGateway#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#password StoragegatewayGateway#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#timeout_in_seconds StoragegatewayGateway#timeout_in_seconds}
  */
  readonly timeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#username StoragegatewayGateway#username}
  */
  readonly username: string;
}

function storagegatewayGatewaySmbActiveDirectorySettingsToTerraform(struct?: StoragegatewayGatewaySmbActiveDirectorySettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    domain_controllers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.domainControllers),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    organizational_unit: cdktf.stringToTerraform(struct!.organizationalUnit),
    password: cdktf.stringToTerraform(struct!.password),
    timeout_in_seconds: cdktf.numberToTerraform(struct!.timeoutInSeconds),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface StoragegatewayGatewayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html#create StoragegatewayGateway#create}
  */
  readonly create?: string;
}

function storagegatewayGatewayTimeoutsToTerraform(struct?: StoragegatewayGatewayTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html aws_storagegateway_gateway}
*/
export class StoragegatewayGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_storagegateway_gateway";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html aws_storagegateway_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StoragegatewayGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: StoragegatewayGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_storagegateway_gateway',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._activationKey = config.activationKey;
    this._averageDownloadRateLimitInBitsPerSec = config.averageDownloadRateLimitInBitsPerSec;
    this._averageUploadRateLimitInBitsPerSec = config.averageUploadRateLimitInBitsPerSec;
    this._cloudwatchLogGroupArn = config.cloudwatchLogGroupArn;
    this._gatewayIpAddress = config.gatewayIpAddress;
    this._gatewayName = config.gatewayName;
    this._gatewayTimezone = config.gatewayTimezone;
    this._gatewayType = config.gatewayType;
    this._gatewayVpcEndpoint = config.gatewayVpcEndpoint;
    this._mediumChangerType = config.mediumChangerType;
    this._smbFileShareVisibility = config.smbFileShareVisibility;
    this._smbGuestPassword = config.smbGuestPassword;
    this._smbSecurityStrategy = config.smbSecurityStrategy;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._tapeDriveType = config.tapeDriveType;
    this._smbActiveDirectorySettings = config.smbActiveDirectorySettings;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_key - computed: true, optional: true, required: false
  private _activationKey?: string;
  public get activationKey() {
    return this.getStringAttribute('activation_key');
  }
  public set activationKey(value: string) {
    this._activationKey = value;
  }
  public resetActivationKey() {
    this._activationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationKeyInput() {
    return this._activationKey
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // average_download_rate_limit_in_bits_per_sec - computed: false, optional: true, required: false
  private _averageDownloadRateLimitInBitsPerSec?: number;
  public get averageDownloadRateLimitInBitsPerSec() {
    return this.getNumberAttribute('average_download_rate_limit_in_bits_per_sec');
  }
  public set averageDownloadRateLimitInBitsPerSec(value: number ) {
    this._averageDownloadRateLimitInBitsPerSec = value;
  }
  public resetAverageDownloadRateLimitInBitsPerSec() {
    this._averageDownloadRateLimitInBitsPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageDownloadRateLimitInBitsPerSecInput() {
    return this._averageDownloadRateLimitInBitsPerSec
  }

  // average_upload_rate_limit_in_bits_per_sec - computed: false, optional: true, required: false
  private _averageUploadRateLimitInBitsPerSec?: number;
  public get averageUploadRateLimitInBitsPerSec() {
    return this.getNumberAttribute('average_upload_rate_limit_in_bits_per_sec');
  }
  public set averageUploadRateLimitInBitsPerSec(value: number ) {
    this._averageUploadRateLimitInBitsPerSec = value;
  }
  public resetAverageUploadRateLimitInBitsPerSec() {
    this._averageUploadRateLimitInBitsPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageUploadRateLimitInBitsPerSecInput() {
    return this._averageUploadRateLimitInBitsPerSec
  }

  // cloudwatch_log_group_arn - computed: false, optional: true, required: false
  private _cloudwatchLogGroupArn?: string;
  public get cloudwatchLogGroupArn() {
    return this.getStringAttribute('cloudwatch_log_group_arn');
  }
  public set cloudwatchLogGroupArn(value: string ) {
    this._cloudwatchLogGroupArn = value;
  }
  public resetCloudwatchLogGroupArn() {
    this._cloudwatchLogGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogGroupArnInput() {
    return this._cloudwatchLogGroupArn
  }

  // ec2_instance_id - computed: true, optional: false, required: false
  public get ec2InstanceId() {
    return this.getStringAttribute('ec2_instance_id');
  }

  // endpoint_type - computed: true, optional: false, required: false
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // gateway_ip_address - computed: true, optional: true, required: false
  private _gatewayIpAddress?: string;
  public get gatewayIpAddress() {
    return this.getStringAttribute('gateway_ip_address');
  }
  public set gatewayIpAddress(value: string) {
    this._gatewayIpAddress = value;
  }
  public resetGatewayIpAddress() {
    this._gatewayIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpAddressInput() {
    return this._gatewayIpAddress
  }

  // gateway_name - computed: false, optional: false, required: true
  private _gatewayName: string;
  public get gatewayName() {
    return this.getStringAttribute('gateway_name');
  }
  public set gatewayName(value: string) {
    this._gatewayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayNameInput() {
    return this._gatewayName
  }

  // gateway_network_interface - computed: true, optional: false, required: false
  public gatewayNetworkInterface(index: string) {
    return new StoragegatewayGatewayGatewayNetworkInterface(this, 'gateway_network_interface', index);
  }

  // gateway_timezone - computed: false, optional: false, required: true
  private _gatewayTimezone: string;
  public get gatewayTimezone() {
    return this.getStringAttribute('gateway_timezone');
  }
  public set gatewayTimezone(value: string) {
    this._gatewayTimezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayTimezoneInput() {
    return this._gatewayTimezone
  }

  // gateway_type - computed: false, optional: true, required: false
  private _gatewayType?: string;
  public get gatewayType() {
    return this.getStringAttribute('gateway_type');
  }
  public set gatewayType(value: string ) {
    this._gatewayType = value;
  }
  public resetGatewayType() {
    this._gatewayType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayTypeInput() {
    return this._gatewayType
  }

  // gateway_vpc_endpoint - computed: false, optional: true, required: false
  private _gatewayVpcEndpoint?: string;
  public get gatewayVpcEndpoint() {
    return this.getStringAttribute('gateway_vpc_endpoint');
  }
  public set gatewayVpcEndpoint(value: string ) {
    this._gatewayVpcEndpoint = value;
  }
  public resetGatewayVpcEndpoint() {
    this._gatewayVpcEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayVpcEndpointInput() {
    return this._gatewayVpcEndpoint
  }

  // host_environment - computed: true, optional: false, required: false
  public get hostEnvironment() {
    return this.getStringAttribute('host_environment');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // medium_changer_type - computed: false, optional: true, required: false
  private _mediumChangerType?: string;
  public get mediumChangerType() {
    return this.getStringAttribute('medium_changer_type');
  }
  public set mediumChangerType(value: string ) {
    this._mediumChangerType = value;
  }
  public resetMediumChangerType() {
    this._mediumChangerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumChangerTypeInput() {
    return this._mediumChangerType
  }

  // smb_file_share_visibility - computed: false, optional: true, required: false
  private _smbFileShareVisibility?: boolean | cdktf.IResolvable;
  public get smbFileShareVisibility() {
    return this.getBooleanAttribute('smb_file_share_visibility');
  }
  public set smbFileShareVisibility(value: boolean | cdktf.IResolvable ) {
    this._smbFileShareVisibility = value;
  }
  public resetSmbFileShareVisibility() {
    this._smbFileShareVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbFileShareVisibilityInput() {
    return this._smbFileShareVisibility
  }

  // smb_guest_password - computed: false, optional: true, required: false
  private _smbGuestPassword?: string;
  public get smbGuestPassword() {
    return this.getStringAttribute('smb_guest_password');
  }
  public set smbGuestPassword(value: string ) {
    this._smbGuestPassword = value;
  }
  public resetSmbGuestPassword() {
    this._smbGuestPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbGuestPasswordInput() {
    return this._smbGuestPassword
  }

  // smb_security_strategy - computed: true, optional: true, required: false
  private _smbSecurityStrategy?: string;
  public get smbSecurityStrategy() {
    return this.getStringAttribute('smb_security_strategy');
  }
  public set smbSecurityStrategy(value: string) {
    this._smbSecurityStrategy = value;
  }
  public resetSmbSecurityStrategy() {
    this._smbSecurityStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbSecurityStrategyInput() {
    return this._smbSecurityStrategy
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // tape_drive_type - computed: false, optional: true, required: false
  private _tapeDriveType?: string;
  public get tapeDriveType() {
    return this.getStringAttribute('tape_drive_type');
  }
  public set tapeDriveType(value: string ) {
    this._tapeDriveType = value;
  }
  public resetTapeDriveType() {
    this._tapeDriveType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tapeDriveTypeInput() {
    return this._tapeDriveType
  }

  // smb_active_directory_settings - computed: false, optional: true, required: false
  private _smbActiveDirectorySettings?: StoragegatewayGatewaySmbActiveDirectorySettings[];
  public get smbActiveDirectorySettings() {
    return this.interpolationForAttribute('smb_active_directory_settings') as any;
  }
  public set smbActiveDirectorySettings(value: StoragegatewayGatewaySmbActiveDirectorySettings[] ) {
    this._smbActiveDirectorySettings = value;
  }
  public resetSmbActiveDirectorySettings() {
    this._smbActiveDirectorySettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbActiveDirectorySettingsInput() {
    return this._smbActiveDirectorySettings
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StoragegatewayGatewayTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StoragegatewayGatewayTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activation_key: cdktf.stringToTerraform(this._activationKey),
      average_download_rate_limit_in_bits_per_sec: cdktf.numberToTerraform(this._averageDownloadRateLimitInBitsPerSec),
      average_upload_rate_limit_in_bits_per_sec: cdktf.numberToTerraform(this._averageUploadRateLimitInBitsPerSec),
      cloudwatch_log_group_arn: cdktf.stringToTerraform(this._cloudwatchLogGroupArn),
      gateway_ip_address: cdktf.stringToTerraform(this._gatewayIpAddress),
      gateway_name: cdktf.stringToTerraform(this._gatewayName),
      gateway_timezone: cdktf.stringToTerraform(this._gatewayTimezone),
      gateway_type: cdktf.stringToTerraform(this._gatewayType),
      gateway_vpc_endpoint: cdktf.stringToTerraform(this._gatewayVpcEndpoint),
      medium_changer_type: cdktf.stringToTerraform(this._mediumChangerType),
      smb_file_share_visibility: cdktf.booleanToTerraform(this._smbFileShareVisibility),
      smb_guest_password: cdktf.stringToTerraform(this._smbGuestPassword),
      smb_security_strategy: cdktf.stringToTerraform(this._smbSecurityStrategy),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      tape_drive_type: cdktf.stringToTerraform(this._tapeDriveType),
      smb_active_directory_settings: cdktf.listMapper(storagegatewayGatewaySmbActiveDirectorySettingsToTerraform)(this._smbActiveDirectorySettings),
      timeouts: storagegatewayGatewayTimeoutsToTerraform(this._timeouts),
    };
  }
}
