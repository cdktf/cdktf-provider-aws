// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Lightsail
*/
export namespace Lightsail {
  export interface LightsailDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_domain.html#domain_name LightsailDomain#domain_name}
    */
    readonly domainName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_domain.html aws_lightsail_domain}
  */
  export class LightsailDomain extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lightsail_domain";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_domain.html aws_lightsail_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LightsailDomainConfig
    */
    public constructor(scope: Construct, id: string, config: LightsailDomainConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lightsail_domain',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._domainName = config.domainName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // domain_name - computed: false, optional: false, required: true
    private _domainName?: string; 
    public get domainName() {
      return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
      this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
      return this._domainName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        domain_name: cdktf.stringToTerraform(this._domainName),
      };
    }
  }
  export interface LightsailInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html#availability_zone LightsailInstance#availability_zone}
    */
    readonly availabilityZone: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html#blueprint_id LightsailInstance#blueprint_id}
    */
    readonly blueprintId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html#bundle_id LightsailInstance#bundle_id}
    */
    readonly bundleId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html#key_pair_name LightsailInstance#key_pair_name}
    */
    readonly keyPairName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html#name LightsailInstance#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html#tags LightsailInstance#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html#tags_all LightsailInstance#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html#user_data LightsailInstance#user_data}
    */
    readonly userData?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html aws_lightsail_instance}
  */
  export class LightsailInstance extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lightsail_instance";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html aws_lightsail_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LightsailInstanceConfig
    */
    public constructor(scope: Construct, id: string, config: LightsailInstanceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lightsail_instance',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._availabilityZone = config.availabilityZone;
      this._blueprintId = config.blueprintId;
      this._bundleId = config.bundleId;
      this._keyPairName = config.keyPairName;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._userData = config.userData;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // availability_zone - computed: false, optional: false, required: true
    private _availabilityZone?: string; 
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string) {
      this._availabilityZone = value;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
      return this._availabilityZone
    }

    // blueprint_id - computed: false, optional: false, required: true
    private _blueprintId?: string; 
    public get blueprintId() {
      return this.getStringAttribute('blueprint_id');
    }
    public set blueprintId(value: string) {
      this._blueprintId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get blueprintIdInput() {
      return this._blueprintId
    }

    // bundle_id - computed: false, optional: false, required: true
    private _bundleId?: string; 
    public get bundleId() {
      return this.getStringAttribute('bundle_id');
    }
    public set bundleId(value: string) {
      this._bundleId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bundleIdInput() {
      return this._bundleId
    }

    // cpu_count - computed: true, optional: false, required: false
    public get cpuCount() {
      return this.getNumberAttribute('cpu_count');
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
      return this.getStringAttribute('created_at');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ipv6_address - computed: true, optional: false, required: false
    public get ipv6Address() {
      return this.getStringAttribute('ipv6_address');
    }

    // ipv6_addresses - computed: true, optional: false, required: false
    public get ipv6Addresses() {
      return this.getListAttribute('ipv6_addresses');
    }

    // is_static_ip - computed: true, optional: false, required: false
    public get isStaticIp() {
      return this.getBooleanAttribute('is_static_ip') as any;
    }

    // key_pair_name - computed: false, optional: true, required: false
    private _keyPairName?: string | undefined; 
    public get keyPairName() {
      return this.getStringAttribute('key_pair_name');
    }
    public set keyPairName(value: string | undefined) {
      this._keyPairName = value;
    }
    public resetKeyPairName() {
      this._keyPairName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyPairNameInput() {
      return this._keyPairName
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
      return this._name
    }

    // private_ip_address - computed: true, optional: false, required: false
    public get privateIpAddress() {
      return this.getStringAttribute('private_ip_address');
    }

    // public_ip_address - computed: true, optional: false, required: false
    public get publicIpAddress() {
      return this.getStringAttribute('public_ip_address');
    }

    // ram_size - computed: true, optional: false, required: false
    public get ramSize() {
      return this.getNumberAttribute('ram_size');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // user_data - computed: false, optional: true, required: false
    private _userData?: string | undefined; 
    public get userData() {
      return this.getStringAttribute('user_data');
    }
    public set userData(value: string | undefined) {
      this._userData = value;
    }
    public resetUserData() {
      this._userData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userDataInput() {
      return this._userData
    }

    // username - computed: true, optional: false, required: false
    public get username() {
      return this.getStringAttribute('username');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        availability_zone: cdktf.stringToTerraform(this._availabilityZone),
        blueprint_id: cdktf.stringToTerraform(this._blueprintId),
        bundle_id: cdktf.stringToTerraform(this._bundleId),
        key_pair_name: cdktf.stringToTerraform(this._keyPairName),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        user_data: cdktf.stringToTerraform(this._userData),
      };
    }
  }
  export interface LightsailInstancePublicPortsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html#instance_name LightsailInstancePublicPorts#instance_name}
    */
    readonly instanceName: string;
    /**
    * port_info block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html#port_info LightsailInstancePublicPorts#port_info}
    */
    readonly portInfo: LightsailInstancePublicPortsPortInfo[];
  }
  export interface LightsailInstancePublicPortsPortInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html#cidrs LightsailInstancePublicPorts#cidrs}
    */
    readonly cidrs?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html#from_port LightsailInstancePublicPorts#from_port}
    */
    readonly fromPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html#protocol LightsailInstancePublicPorts#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html#to_port LightsailInstancePublicPorts#to_port}
    */
    readonly toPort: number;
  }

  function lightsailInstancePublicPortsPortInfoToTerraform(struct?: LightsailInstancePublicPortsPortInfo): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cidrs),
      from_port: cdktf.numberToTerraform(struct!.fromPort),
      protocol: cdktf.stringToTerraform(struct!.protocol),
      to_port: cdktf.numberToTerraform(struct!.toPort),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html aws_lightsail_instance_public_ports}
  */
  export class LightsailInstancePublicPorts extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lightsail_instance_public_ports";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html aws_lightsail_instance_public_ports} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LightsailInstancePublicPortsConfig
    */
    public constructor(scope: Construct, id: string, config: LightsailInstancePublicPortsConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lightsail_instance_public_ports',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._instanceName = config.instanceName;
      this._portInfo = config.portInfo;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_name - computed: false, optional: false, required: true
    private _instanceName?: string; 
    public get instanceName() {
      return this.getStringAttribute('instance_name');
    }
    public set instanceName(value: string) {
      this._instanceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceNameInput() {
      return this._instanceName
    }

    // port_info - computed: false, optional: false, required: true
    private _portInfo?: LightsailInstancePublicPortsPortInfo[]; 
    public get portInfo() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('port_info') as any;
    }
    public set portInfo(value: LightsailInstancePublicPortsPortInfo[]) {
      this._portInfo = value;
    }
    // Temporarily expose input value. Use with caution.
    public get portInfoInput() {
      return this._portInfo
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        instance_name: cdktf.stringToTerraform(this._instanceName),
        port_info: cdktf.listMapper(lightsailInstancePublicPortsPortInfoToTerraform)(this._portInfo),
      };
    }
  }
  export interface LightsailKeyPairConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair.html#name LightsailKeyPair#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair.html#name_prefix LightsailKeyPair#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair.html#pgp_key LightsailKeyPair#pgp_key}
    */
    readonly pgpKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair.html#public_key LightsailKeyPair#public_key}
    */
    readonly publicKey?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair.html aws_lightsail_key_pair}
  */
  export class LightsailKeyPair extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lightsail_key_pair";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair.html aws_lightsail_key_pair} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LightsailKeyPairConfig = {}
    */
    public constructor(scope: Construct, id: string, config: LightsailKeyPairConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_lightsail_key_pair',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._pgpKey = config.pgpKey;
      this._publicKey = config.publicKey;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // encrypted_fingerprint - computed: true, optional: false, required: false
    public get encryptedFingerprint() {
      return this.getStringAttribute('encrypted_fingerprint');
    }

    // encrypted_private_key - computed: true, optional: false, required: false
    public get encryptedPrivateKey() {
      return this.getStringAttribute('encrypted_private_key');
    }

    // fingerprint - computed: true, optional: false, required: false
    public get fingerprint() {
      return this.getStringAttribute('fingerprint');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: false, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // pgp_key - computed: false, optional: true, required: false
    private _pgpKey?: string | undefined; 
    public get pgpKey() {
      return this.getStringAttribute('pgp_key');
    }
    public set pgpKey(value: string | undefined) {
      this._pgpKey = value;
    }
    public resetPgpKey() {
      this._pgpKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pgpKeyInput() {
      return this._pgpKey
    }

    // private_key - computed: true, optional: false, required: false
    public get privateKey() {
      return this.getStringAttribute('private_key');
    }

    // public_key - computed: true, optional: true, required: false
    private _publicKey?: string | undefined; 
    public get publicKey() {
      return this.getStringAttribute('public_key');
    }
    public set publicKey(value: string | undefined) {
      this._publicKey = value;
    }
    public resetPublicKey() {
      this._publicKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicKeyInput() {
      return this._publicKey
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        pgp_key: cdktf.stringToTerraform(this._pgpKey),
        public_key: cdktf.stringToTerraform(this._publicKey),
      };
    }
  }
  export interface LightsailStaticIpConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip.html#name LightsailStaticIp#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip.html aws_lightsail_static_ip}
  */
  export class LightsailStaticIp extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lightsail_static_ip";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip.html aws_lightsail_static_ip} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LightsailStaticIpConfig
    */
    public constructor(scope: Construct, id: string, config: LightsailStaticIpConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lightsail_static_ip',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ip_address - computed: true, optional: false, required: false
    public get ipAddress() {
      return this.getStringAttribute('ip_address');
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
      return this._name
    }

    // support_code - computed: true, optional: false, required: false
    public get supportCode() {
      return this.getStringAttribute('support_code');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface LightsailStaticIpAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip_attachment.html#instance_name LightsailStaticIpAttachment#instance_name}
    */
    readonly instanceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip_attachment.html#static_ip_name LightsailStaticIpAttachment#static_ip_name}
    */
    readonly staticIpName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip_attachment.html aws_lightsail_static_ip_attachment}
  */
  export class LightsailStaticIpAttachment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lightsail_static_ip_attachment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip_attachment.html aws_lightsail_static_ip_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LightsailStaticIpAttachmentConfig
    */
    public constructor(scope: Construct, id: string, config: LightsailStaticIpAttachmentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lightsail_static_ip_attachment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._instanceName = config.instanceName;
      this._staticIpName = config.staticIpName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_name - computed: false, optional: false, required: true
    private _instanceName?: string; 
    public get instanceName() {
      return this.getStringAttribute('instance_name');
    }
    public set instanceName(value: string) {
      this._instanceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceNameInput() {
      return this._instanceName
    }

    // ip_address - computed: true, optional: false, required: false
    public get ipAddress() {
      return this.getStringAttribute('ip_address');
    }

    // static_ip_name - computed: false, optional: false, required: true
    private _staticIpName?: string; 
    public get staticIpName() {
      return this.getStringAttribute('static_ip_name');
    }
    public set staticIpName(value: string) {
      this._staticIpName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get staticIpNameInput() {
      return this._staticIpName
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        instance_name: cdktf.stringToTerraform(this._instanceName),
        static_ip_name: cdktf.stringToTerraform(this._staticIpName),
      };
    }
  }
}
