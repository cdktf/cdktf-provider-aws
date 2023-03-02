# `launchConfiguration` Submodule <a name="`launchConfiguration` Submodule" id="@cdktf/provider-aws.launchConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LaunchConfiguration <a name="LaunchConfiguration" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration aws_launch_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_configuration

launchConfiguration.LaunchConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  image_id: str,
  instance_type: str,
  associate_public_ip_address: typing.Union[bool, IResolvable] = None,
  ebs_block_device: typing.Union[IResolvable, typing.List[LaunchConfigurationEbsBlockDevice]] = None,
  ebs_optimized: typing.Union[bool, IResolvable] = None,
  enable_monitoring: typing.Union[bool, IResolvable] = None,
  ephemeral_block_device: typing.Union[IResolvable, typing.List[LaunchConfigurationEphemeralBlockDevice]] = None,
  iam_instance_profile: str = None,
  id: str = None,
  key_name: str = None,
  metadata_options: LaunchConfigurationMetadataOptions = None,
  name: str = None,
  name_prefix: str = None,
  placement_tenancy: str = None,
  root_block_device: LaunchConfigurationRootBlockDevice = None,
  security_groups: typing.List[str] = None,
  spot_price: str = None,
  user_data: str = None,
  user_data_base64: str = None,
  vpc_classic_link_id: str = None,
  vpc_classic_link_security_groups: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#image_id LaunchConfiguration#image_id}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#instance_type LaunchConfiguration#instance_type}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#associate_public_ip_address LaunchConfiguration#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.ebsBlockDevice">ebs_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice">LaunchConfigurationEbsBlockDevice</a>]]</code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.ebsOptimized">ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#ebs_optimized LaunchConfiguration#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.enableMonitoring">enable_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#enable_monitoring LaunchConfiguration#enable_monitoring}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.ephemeralBlockDevice">ephemeral_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice">LaunchConfigurationEphemeralBlockDevice</a>]]</code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#iam_instance_profile LaunchConfiguration#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#id LaunchConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.keyName">key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#key_name LaunchConfiguration#key_name}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions">LaunchConfigurationMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#name LaunchConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#name_prefix LaunchConfiguration#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.placementTenancy">placement_tenancy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#placement_tenancy LaunchConfiguration#placement_tenancy}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.rootBlockDevice">root_block_device</a></code> | <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice">LaunchConfigurationRootBlockDevice</a></code> | root_block_device block. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#security_groups LaunchConfiguration#security_groups}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.spotPrice">spot_price</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#spot_price LaunchConfiguration#spot_price}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#user_data LaunchConfiguration#user_data}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.userDataBase64">user_data_base64</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#user_data_base64 LaunchConfiguration#user_data_base64}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.vpcClassicLinkId">vpc_classic_link_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#vpc_classic_link_id LaunchConfiguration#vpc_classic_link_id}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.vpcClassicLinkSecurityGroups">vpc_classic_link_security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#vpc_classic_link_security_groups LaunchConfiguration#vpc_classic_link_security_groups}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.imageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#image_id LaunchConfiguration#image_id}.

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#instance_type LaunchConfiguration#instance_type}.

---

##### `associate_public_ip_address`<sup>Optional</sup> <a name="associate_public_ip_address" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.associatePublicIpAddress"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#associate_public_ip_address LaunchConfiguration#associate_public_ip_address}.

---

##### `ebs_block_device`<sup>Optional</sup> <a name="ebs_block_device" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.ebsBlockDevice"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice">LaunchConfigurationEbsBlockDevice</a>]]

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#ebs_block_device LaunchConfiguration#ebs_block_device}

---

##### `ebs_optimized`<sup>Optional</sup> <a name="ebs_optimized" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.ebsOptimized"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#ebs_optimized LaunchConfiguration#ebs_optimized}.

---

##### `enable_monitoring`<sup>Optional</sup> <a name="enable_monitoring" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.enableMonitoring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#enable_monitoring LaunchConfiguration#enable_monitoring}.

---

##### `ephemeral_block_device`<sup>Optional</sup> <a name="ephemeral_block_device" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.ephemeralBlockDevice"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice">LaunchConfigurationEphemeralBlockDevice</a>]]

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#ephemeral_block_device LaunchConfiguration#ephemeral_block_device}

---

##### `iam_instance_profile`<sup>Optional</sup> <a name="iam_instance_profile" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.iamInstanceProfile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#iam_instance_profile LaunchConfiguration#iam_instance_profile}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#id LaunchConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.keyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#key_name LaunchConfiguration#key_name}.

---

##### `metadata_options`<sup>Optional</sup> <a name="metadata_options" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.metadataOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions">LaunchConfigurationMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#metadata_options LaunchConfiguration#metadata_options}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#name LaunchConfiguration#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#name_prefix LaunchConfiguration#name_prefix}.

---

##### `placement_tenancy`<sup>Optional</sup> <a name="placement_tenancy" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.placementTenancy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#placement_tenancy LaunchConfiguration#placement_tenancy}.

---

##### `root_block_device`<sup>Optional</sup> <a name="root_block_device" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.rootBlockDevice"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice">LaunchConfigurationRootBlockDevice</a>

root_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#root_block_device LaunchConfiguration#root_block_device}

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.securityGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#security_groups LaunchConfiguration#security_groups}.

---

##### `spot_price`<sup>Optional</sup> <a name="spot_price" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.spotPrice"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#spot_price LaunchConfiguration#spot_price}.

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.userData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#user_data LaunchConfiguration#user_data}.

---

##### `user_data_base64`<sup>Optional</sup> <a name="user_data_base64" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.userDataBase64"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#user_data_base64 LaunchConfiguration#user_data_base64}.

---

##### `vpc_classic_link_id`<sup>Optional</sup> <a name="vpc_classic_link_id" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.vpcClassicLinkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#vpc_classic_link_id LaunchConfiguration#vpc_classic_link_id}.

---

##### `vpc_classic_link_security_groups`<sup>Optional</sup> <a name="vpc_classic_link_security_groups" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.Initializer.parameter.vpcClassicLinkSecurityGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#vpc_classic_link_security_groups LaunchConfiguration#vpc_classic_link_security_groups}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putEbsBlockDevice">put_ebs_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putEphemeralBlockDevice">put_ephemeral_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putMetadataOptions">put_metadata_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putRootBlockDevice">put_root_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetAssociatePublicIpAddress">reset_associate_public_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetEbsBlockDevice">reset_ebs_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetEbsOptimized">reset_ebs_optimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetEnableMonitoring">reset_enable_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetEphemeralBlockDevice">reset_ephemeral_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetIamInstanceProfile">reset_iam_instance_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetKeyName">reset_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetMetadataOptions">reset_metadata_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetPlacementTenancy">reset_placement_tenancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetRootBlockDevice">reset_root_block_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetSpotPrice">reset_spot_price</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetUserData">reset_user_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetUserDataBase64">reset_user_data_base64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetVpcClassicLinkId">reset_vpc_classic_link_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetVpcClassicLinkSecurityGroups">reset_vpc_classic_link_security_groups</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_ebs_block_device` <a name="put_ebs_block_device" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putEbsBlockDevice"></a>

```python
def put_ebs_block_device(
  value: typing.Union[IResolvable, typing.List[LaunchConfigurationEbsBlockDevice]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putEbsBlockDevice.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice">LaunchConfigurationEbsBlockDevice</a>]]

---

##### `put_ephemeral_block_device` <a name="put_ephemeral_block_device" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putEphemeralBlockDevice"></a>

```python
def put_ephemeral_block_device(
  value: typing.Union[IResolvable, typing.List[LaunchConfigurationEphemeralBlockDevice]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putEphemeralBlockDevice.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice">LaunchConfigurationEphemeralBlockDevice</a>]]

---

##### `put_metadata_options` <a name="put_metadata_options" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putMetadataOptions"></a>

```python
def put_metadata_options(
  http_endpoint: str = None,
  http_put_response_hop_limit: typing.Union[int, float] = None,
  http_tokens: str = None
) -> None
```

###### `http_endpoint`<sup>Optional</sup> <a name="http_endpoint" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putMetadataOptions.parameter.httpEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#http_endpoint LaunchConfiguration#http_endpoint}.

---

###### `http_put_response_hop_limit`<sup>Optional</sup> <a name="http_put_response_hop_limit" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putMetadataOptions.parameter.httpPutResponseHopLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#http_put_response_hop_limit LaunchConfiguration#http_put_response_hop_limit}.

---

###### `http_tokens`<sup>Optional</sup> <a name="http_tokens" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putMetadataOptions.parameter.httpTokens"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#http_tokens LaunchConfiguration#http_tokens}.

---

##### `put_root_block_device` <a name="put_root_block_device" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putRootBlockDevice"></a>

```python
def put_root_block_device(
  delete_on_termination: typing.Union[bool, IResolvable] = None,
  encrypted: typing.Union[bool, IResolvable] = None,
  iops: typing.Union[int, float] = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
) -> None
```

###### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putRootBlockDevice.parameter.deleteOnTermination"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#delete_on_termination LaunchConfiguration#delete_on_termination}.

---

###### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putRootBlockDevice.parameter.encrypted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#encrypted LaunchConfiguration#encrypted}.

---

###### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putRootBlockDevice.parameter.iops"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#iops LaunchConfiguration#iops}.

---

###### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putRootBlockDevice.parameter.throughput"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#throughput LaunchConfiguration#throughput}.

---

###### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putRootBlockDevice.parameter.volumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#volume_size LaunchConfiguration#volume_size}.

---

###### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.putRootBlockDevice.parameter.volumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#volume_type LaunchConfiguration#volume_type}.

---

##### `reset_associate_public_ip_address` <a name="reset_associate_public_ip_address" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetAssociatePublicIpAddress"></a>

```python
def reset_associate_public_ip_address() -> None
```

##### `reset_ebs_block_device` <a name="reset_ebs_block_device" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetEbsBlockDevice"></a>

```python
def reset_ebs_block_device() -> None
```

##### `reset_ebs_optimized` <a name="reset_ebs_optimized" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetEbsOptimized"></a>

```python
def reset_ebs_optimized() -> None
```

##### `reset_enable_monitoring` <a name="reset_enable_monitoring" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetEnableMonitoring"></a>

```python
def reset_enable_monitoring() -> None
```

##### `reset_ephemeral_block_device` <a name="reset_ephemeral_block_device" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetEphemeralBlockDevice"></a>

```python
def reset_ephemeral_block_device() -> None
```

##### `reset_iam_instance_profile` <a name="reset_iam_instance_profile" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetIamInstanceProfile"></a>

```python
def reset_iam_instance_profile() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_name` <a name="reset_key_name" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetKeyName"></a>

```python
def reset_key_name() -> None
```

##### `reset_metadata_options` <a name="reset_metadata_options" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetMetadataOptions"></a>

```python
def reset_metadata_options() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_placement_tenancy` <a name="reset_placement_tenancy" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetPlacementTenancy"></a>

```python
def reset_placement_tenancy() -> None
```

##### `reset_root_block_device` <a name="reset_root_block_device" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetRootBlockDevice"></a>

```python
def reset_root_block_device() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_spot_price` <a name="reset_spot_price" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetSpotPrice"></a>

```python
def reset_spot_price() -> None
```

##### `reset_user_data` <a name="reset_user_data" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetUserData"></a>

```python
def reset_user_data() -> None
```

##### `reset_user_data_base64` <a name="reset_user_data_base64" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetUserDataBase64"></a>

```python
def reset_user_data_base64() -> None
```

##### `reset_vpc_classic_link_id` <a name="reset_vpc_classic_link_id" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetVpcClassicLinkId"></a>

```python
def reset_vpc_classic_link_id() -> None
```

##### `reset_vpc_classic_link_security_groups` <a name="reset_vpc_classic_link_security_groups" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.resetVpcClassicLinkSecurityGroups"></a>

```python
def reset_vpc_classic_link_security_groups() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import launch_configuration

launchConfiguration.LaunchConfiguration.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import launch_configuration

launchConfiguration.LaunchConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import launch_configuration

launchConfiguration.LaunchConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.ebsBlockDevice">ebs_block_device</a></code> | <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList">LaunchConfigurationEbsBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.ephemeralBlockDevice">ephemeral_block_device</a></code> | <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList">LaunchConfigurationEphemeralBlockDeviceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference">LaunchConfigurationMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.rootBlockDevice">root_block_device</a></code> | <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference">LaunchConfigurationRootBlockDeviceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.associatePublicIpAddressInput">associate_public_ip_address_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.ebsBlockDeviceInput">ebs_block_device_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice">LaunchConfigurationEbsBlockDevice</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.ebsOptimizedInput">ebs_optimized_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.enableMonitoringInput">enable_monitoring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.ephemeralBlockDeviceInput">ephemeral_block_device_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice">LaunchConfigurationEphemeralBlockDevice</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.iamInstanceProfileInput">iam_instance_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.imageIdInput">image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.metadataOptionsInput">metadata_options_input</a></code> | <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions">LaunchConfigurationMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.placementTenancyInput">placement_tenancy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.rootBlockDeviceInput">root_block_device_input</a></code> | <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice">LaunchConfigurationRootBlockDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.spotPriceInput">spot_price_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.userDataBase64Input">user_data_base64_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.userDataInput">user_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.vpcClassicLinkIdInput">vpc_classic_link_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.vpcClassicLinkSecurityGroupsInput">vpc_classic_link_security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.ebsOptimized">ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.enableMonitoring">enable_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.placementTenancy">placement_tenancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.spotPrice">spot_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.userData">user_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.userDataBase64">user_data_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.vpcClassicLinkId">vpc_classic_link_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.vpcClassicLinkSecurityGroups">vpc_classic_link_security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `ebs_block_device`<sup>Required</sup> <a name="ebs_block_device" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.ebsBlockDevice"></a>

```python
ebs_block_device: LaunchConfigurationEbsBlockDeviceList
```

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList">LaunchConfigurationEbsBlockDeviceList</a>

---

##### `ephemeral_block_device`<sup>Required</sup> <a name="ephemeral_block_device" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.ephemeralBlockDevice"></a>

```python
ephemeral_block_device: LaunchConfigurationEphemeralBlockDeviceList
```

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList">LaunchConfigurationEphemeralBlockDeviceList</a>

---

##### `metadata_options`<sup>Required</sup> <a name="metadata_options" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.metadataOptions"></a>

```python
metadata_options: LaunchConfigurationMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference">LaunchConfigurationMetadataOptionsOutputReference</a>

---

##### `root_block_device`<sup>Required</sup> <a name="root_block_device" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.rootBlockDevice"></a>

```python
root_block_device: LaunchConfigurationRootBlockDeviceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference">LaunchConfigurationRootBlockDeviceOutputReference</a>

---

##### `associate_public_ip_address_input`<sup>Optional</sup> <a name="associate_public_ip_address_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.associatePublicIpAddressInput"></a>

```python
associate_public_ip_address_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ebs_block_device_input`<sup>Optional</sup> <a name="ebs_block_device_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.ebsBlockDeviceInput"></a>

```python
ebs_block_device_input: typing.Union[IResolvable, typing.List[LaunchConfigurationEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice">LaunchConfigurationEbsBlockDevice</a>]]

---

##### `ebs_optimized_input`<sup>Optional</sup> <a name="ebs_optimized_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.ebsOptimizedInput"></a>

```python
ebs_optimized_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_monitoring_input`<sup>Optional</sup> <a name="enable_monitoring_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.enableMonitoringInput"></a>

```python
enable_monitoring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ephemeral_block_device_input`<sup>Optional</sup> <a name="ephemeral_block_device_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.ephemeralBlockDeviceInput"></a>

```python
ephemeral_block_device_input: typing.Union[IResolvable, typing.List[LaunchConfigurationEphemeralBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice">LaunchConfigurationEphemeralBlockDevice</a>]]

---

##### `iam_instance_profile_input`<sup>Optional</sup> <a name="iam_instance_profile_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.iamInstanceProfileInput"></a>

```python
iam_instance_profile_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_id_input`<sup>Optional</sup> <a name="image_id_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.imageIdInput"></a>

```python
image_id_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `metadata_options_input`<sup>Optional</sup> <a name="metadata_options_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.metadataOptionsInput"></a>

```python
metadata_options_input: LaunchConfigurationMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions">LaunchConfigurationMetadataOptions</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `placement_tenancy_input`<sup>Optional</sup> <a name="placement_tenancy_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.placementTenancyInput"></a>

```python
placement_tenancy_input: str
```

- *Type:* str

---

##### `root_block_device_input`<sup>Optional</sup> <a name="root_block_device_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.rootBlockDeviceInput"></a>

```python
root_block_device_input: LaunchConfigurationRootBlockDevice
```

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice">LaunchConfigurationRootBlockDevice</a>

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `spot_price_input`<sup>Optional</sup> <a name="spot_price_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.spotPriceInput"></a>

```python
spot_price_input: str
```

- *Type:* str

---

##### `user_data_base64_input`<sup>Optional</sup> <a name="user_data_base64_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.userDataBase64Input"></a>

```python
user_data_base64_input: str
```

- *Type:* str

---

##### `user_data_input`<sup>Optional</sup> <a name="user_data_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.userDataInput"></a>

```python
user_data_input: str
```

- *Type:* str

---

##### `vpc_classic_link_id_input`<sup>Optional</sup> <a name="vpc_classic_link_id_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.vpcClassicLinkIdInput"></a>

```python
vpc_classic_link_id_input: str
```

- *Type:* str

---

##### `vpc_classic_link_security_groups_input`<sup>Optional</sup> <a name="vpc_classic_link_security_groups_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.vpcClassicLinkSecurityGroupsInput"></a>

```python
vpc_classic_link_security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `associate_public_ip_address`<sup>Required</sup> <a name="associate_public_ip_address" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.associatePublicIpAddress"></a>

```python
associate_public_ip_address: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ebs_optimized`<sup>Required</sup> <a name="ebs_optimized" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.ebsOptimized"></a>

```python
ebs_optimized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_monitoring`<sup>Required</sup> <a name="enable_monitoring" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.enableMonitoring"></a>

```python
enable_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iam_instance_profile`<sup>Required</sup> <a name="iam_instance_profile" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.iamInstanceProfile"></a>

```python
iam_instance_profile: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `placement_tenancy`<sup>Required</sup> <a name="placement_tenancy" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.placementTenancy"></a>

```python
placement_tenancy: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `spot_price`<sup>Required</sup> <a name="spot_price" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.spotPrice"></a>

```python
spot_price: str
```

- *Type:* str

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

##### `user_data_base64`<sup>Required</sup> <a name="user_data_base64" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.userDataBase64"></a>

```python
user_data_base64: str
```

- *Type:* str

---

##### `vpc_classic_link_id`<sup>Required</sup> <a name="vpc_classic_link_id" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.vpcClassicLinkId"></a>

```python
vpc_classic_link_id: str
```

- *Type:* str

---

##### `vpc_classic_link_security_groups`<sup>Required</sup> <a name="vpc_classic_link_security_groups" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.vpcClassicLinkSecurityGroups"></a>

```python
vpc_classic_link_security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.launchConfiguration.LaunchConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LaunchConfigurationConfig <a name="LaunchConfigurationConfig" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_configuration

launchConfiguration.LaunchConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  image_id: str,
  instance_type: str,
  associate_public_ip_address: typing.Union[bool, IResolvable] = None,
  ebs_block_device: typing.Union[IResolvable, typing.List[LaunchConfigurationEbsBlockDevice]] = None,
  ebs_optimized: typing.Union[bool, IResolvable] = None,
  enable_monitoring: typing.Union[bool, IResolvable] = None,
  ephemeral_block_device: typing.Union[IResolvable, typing.List[LaunchConfigurationEphemeralBlockDevice]] = None,
  iam_instance_profile: str = None,
  id: str = None,
  key_name: str = None,
  metadata_options: LaunchConfigurationMetadataOptions = None,
  name: str = None,
  name_prefix: str = None,
  placement_tenancy: str = None,
  root_block_device: LaunchConfigurationRootBlockDevice = None,
  security_groups: typing.List[str] = None,
  spot_price: str = None,
  user_data: str = None,
  user_data_base64: str = None,
  vpc_classic_link_id: str = None,
  vpc_classic_link_security_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#image_id LaunchConfiguration#image_id}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#instance_type LaunchConfiguration#instance_type}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#associate_public_ip_address LaunchConfiguration#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.ebsBlockDevice">ebs_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice">LaunchConfigurationEbsBlockDevice</a>]]</code> | ebs_block_device block. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.ebsOptimized">ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#ebs_optimized LaunchConfiguration#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.enableMonitoring">enable_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#enable_monitoring LaunchConfiguration#enable_monitoring}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.ephemeralBlockDevice">ephemeral_block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice">LaunchConfigurationEphemeralBlockDevice</a>]]</code> | ephemeral_block_device block. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#iam_instance_profile LaunchConfiguration#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#id LaunchConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.keyName">key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#key_name LaunchConfiguration#key_name}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions">LaunchConfigurationMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#name LaunchConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#name_prefix LaunchConfiguration#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.placementTenancy">placement_tenancy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#placement_tenancy LaunchConfiguration#placement_tenancy}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.rootBlockDevice">root_block_device</a></code> | <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice">LaunchConfigurationRootBlockDevice</a></code> | root_block_device block. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#security_groups LaunchConfiguration#security_groups}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.spotPrice">spot_price</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#spot_price LaunchConfiguration#spot_price}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#user_data LaunchConfiguration#user_data}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.userDataBase64">user_data_base64</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#user_data_base64 LaunchConfiguration#user_data_base64}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.vpcClassicLinkId">vpc_classic_link_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#vpc_classic_link_id LaunchConfiguration#vpc_classic_link_id}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.vpcClassicLinkSecurityGroups">vpc_classic_link_security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#vpc_classic_link_security_groups LaunchConfiguration#vpc_classic_link_security_groups}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#image_id LaunchConfiguration#image_id}.

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#instance_type LaunchConfiguration#instance_type}.

---

##### `associate_public_ip_address`<sup>Optional</sup> <a name="associate_public_ip_address" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.associatePublicIpAddress"></a>

```python
associate_public_ip_address: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#associate_public_ip_address LaunchConfiguration#associate_public_ip_address}.

---

##### `ebs_block_device`<sup>Optional</sup> <a name="ebs_block_device" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.ebsBlockDevice"></a>

```python
ebs_block_device: typing.Union[IResolvable, typing.List[LaunchConfigurationEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice">LaunchConfigurationEbsBlockDevice</a>]]

ebs_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#ebs_block_device LaunchConfiguration#ebs_block_device}

---

##### `ebs_optimized`<sup>Optional</sup> <a name="ebs_optimized" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.ebsOptimized"></a>

```python
ebs_optimized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#ebs_optimized LaunchConfiguration#ebs_optimized}.

---

##### `enable_monitoring`<sup>Optional</sup> <a name="enable_monitoring" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.enableMonitoring"></a>

```python
enable_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#enable_monitoring LaunchConfiguration#enable_monitoring}.

---

##### `ephemeral_block_device`<sup>Optional</sup> <a name="ephemeral_block_device" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.ephemeralBlockDevice"></a>

```python
ephemeral_block_device: typing.Union[IResolvable, typing.List[LaunchConfigurationEphemeralBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice">LaunchConfigurationEphemeralBlockDevice</a>]]

ephemeral_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#ephemeral_block_device LaunchConfiguration#ephemeral_block_device}

---

##### `iam_instance_profile`<sup>Optional</sup> <a name="iam_instance_profile" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.iamInstanceProfile"></a>

```python
iam_instance_profile: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#iam_instance_profile LaunchConfiguration#iam_instance_profile}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#id LaunchConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#key_name LaunchConfiguration#key_name}.

---

##### `metadata_options`<sup>Optional</sup> <a name="metadata_options" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.metadataOptions"></a>

```python
metadata_options: LaunchConfigurationMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions">LaunchConfigurationMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#metadata_options LaunchConfiguration#metadata_options}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#name LaunchConfiguration#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#name_prefix LaunchConfiguration#name_prefix}.

---

##### `placement_tenancy`<sup>Optional</sup> <a name="placement_tenancy" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.placementTenancy"></a>

```python
placement_tenancy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#placement_tenancy LaunchConfiguration#placement_tenancy}.

---

##### `root_block_device`<sup>Optional</sup> <a name="root_block_device" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.rootBlockDevice"></a>

```python
root_block_device: LaunchConfigurationRootBlockDevice
```

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice">LaunchConfigurationRootBlockDevice</a>

root_block_device block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#root_block_device LaunchConfiguration#root_block_device}

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#security_groups LaunchConfiguration#security_groups}.

---

##### `spot_price`<sup>Optional</sup> <a name="spot_price" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.spotPrice"></a>

```python
spot_price: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#spot_price LaunchConfiguration#spot_price}.

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.userData"></a>

```python
user_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#user_data LaunchConfiguration#user_data}.

---

##### `user_data_base64`<sup>Optional</sup> <a name="user_data_base64" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.userDataBase64"></a>

```python
user_data_base64: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#user_data_base64 LaunchConfiguration#user_data_base64}.

---

##### `vpc_classic_link_id`<sup>Optional</sup> <a name="vpc_classic_link_id" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.vpcClassicLinkId"></a>

```python
vpc_classic_link_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#vpc_classic_link_id LaunchConfiguration#vpc_classic_link_id}.

---

##### `vpc_classic_link_security_groups`<sup>Optional</sup> <a name="vpc_classic_link_security_groups" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationConfig.property.vpcClassicLinkSecurityGroups"></a>

```python
vpc_classic_link_security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#vpc_classic_link_security_groups LaunchConfiguration#vpc_classic_link_security_groups}.

---

### LaunchConfigurationEbsBlockDevice <a name="LaunchConfigurationEbsBlockDevice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_configuration

launchConfiguration.LaunchConfigurationEbsBlockDevice(
  device_name: str,
  delete_on_termination: typing.Union[bool, IResolvable] = None,
  encrypted: typing.Union[bool, IResolvable] = None,
  iops: typing.Union[int, float] = None,
  no_device: typing.Union[bool, IResolvable] = None,
  snapshot_id: str = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.deviceName">device_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#device_name LaunchConfiguration#device_name}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#delete_on_termination LaunchConfiguration#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#encrypted LaunchConfiguration#encrypted}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#iops LaunchConfiguration#iops}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.noDevice">no_device</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#no_device LaunchConfiguration#no_device}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#snapshot_id LaunchConfiguration#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#throughput LaunchConfiguration#throughput}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#volume_size LaunchConfiguration#volume_size}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#volume_type LaunchConfiguration#volume_type}. |

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#device_name LaunchConfiguration#device_name}.

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#delete_on_termination LaunchConfiguration#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#encrypted LaunchConfiguration#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#iops LaunchConfiguration#iops}.

---

##### `no_device`<sup>Optional</sup> <a name="no_device" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.noDevice"></a>

```python
no_device: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#no_device LaunchConfiguration#no_device}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#snapshot_id LaunchConfiguration#snapshot_id}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#throughput LaunchConfiguration#throughput}.

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#volume_size LaunchConfiguration#volume_size}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#volume_type LaunchConfiguration#volume_type}.

---

### LaunchConfigurationEphemeralBlockDevice <a name="LaunchConfigurationEphemeralBlockDevice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_configuration

launchConfiguration.LaunchConfigurationEphemeralBlockDevice(
  device_name: str,
  no_device: typing.Union[bool, IResolvable] = None,
  virtual_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice.property.deviceName">device_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#device_name LaunchConfiguration#device_name}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice.property.noDevice">no_device</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#no_device LaunchConfiguration#no_device}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice.property.virtualName">virtual_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#virtual_name LaunchConfiguration#virtual_name}. |

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#device_name LaunchConfiguration#device_name}.

---

##### `no_device`<sup>Optional</sup> <a name="no_device" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice.property.noDevice"></a>

```python
no_device: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#no_device LaunchConfiguration#no_device}.

---

##### `virtual_name`<sup>Optional</sup> <a name="virtual_name" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#virtual_name LaunchConfiguration#virtual_name}.

---

### LaunchConfigurationMetadataOptions <a name="LaunchConfigurationMetadataOptions" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_configuration

launchConfiguration.LaunchConfigurationMetadataOptions(
  http_endpoint: str = None,
  http_put_response_hop_limit: typing.Union[int, float] = None,
  http_tokens: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions.property.httpEndpoint">http_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#http_endpoint LaunchConfiguration#http_endpoint}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions.property.httpPutResponseHopLimit">http_put_response_hop_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#http_put_response_hop_limit LaunchConfiguration#http_put_response_hop_limit}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions.property.httpTokens">http_tokens</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#http_tokens LaunchConfiguration#http_tokens}. |

---

##### `http_endpoint`<sup>Optional</sup> <a name="http_endpoint" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions.property.httpEndpoint"></a>

```python
http_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#http_endpoint LaunchConfiguration#http_endpoint}.

---

##### `http_put_response_hop_limit`<sup>Optional</sup> <a name="http_put_response_hop_limit" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions.property.httpPutResponseHopLimit"></a>

```python
http_put_response_hop_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#http_put_response_hop_limit LaunchConfiguration#http_put_response_hop_limit}.

---

##### `http_tokens`<sup>Optional</sup> <a name="http_tokens" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions.property.httpTokens"></a>

```python
http_tokens: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#http_tokens LaunchConfiguration#http_tokens}.

---

### LaunchConfigurationRootBlockDevice <a name="LaunchConfigurationRootBlockDevice" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_configuration

launchConfiguration.LaunchConfigurationRootBlockDevice(
  delete_on_termination: typing.Union[bool, IResolvable] = None,
  encrypted: typing.Union[bool, IResolvable] = None,
  iops: typing.Union[int, float] = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#delete_on_termination LaunchConfiguration#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#encrypted LaunchConfiguration#encrypted}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#iops LaunchConfiguration#iops}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#throughput LaunchConfiguration#throughput}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#volume_size LaunchConfiguration#volume_size}. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#volume_type LaunchConfiguration#volume_type}. |

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#delete_on_termination LaunchConfiguration#delete_on_termination}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#encrypted LaunchConfiguration#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#iops LaunchConfiguration#iops}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#throughput LaunchConfiguration#throughput}.

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#volume_size LaunchConfiguration#volume_size}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration#volume_type LaunchConfiguration#volume_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LaunchConfigurationEbsBlockDeviceList <a name="LaunchConfigurationEbsBlockDeviceList" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_configuration

launchConfiguration.LaunchConfigurationEbsBlockDeviceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LaunchConfigurationEbsBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice">LaunchConfigurationEbsBlockDevice</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LaunchConfigurationEbsBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice">LaunchConfigurationEbsBlockDevice</a>]]

---


### LaunchConfigurationEbsBlockDeviceOutputReference <a name="LaunchConfigurationEbsBlockDeviceOutputReference" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_configuration

launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetDeleteOnTermination">reset_delete_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetNoDevice">reset_no_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetVolumeSize">reset_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_on_termination` <a name="reset_delete_on_termination" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```python
def reset_delete_on_termination() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_no_device` <a name="reset_no_device" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetNoDevice"></a>

```python
def reset_no_device() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_size` <a name="reset_volume_size" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetVolumeSize"></a>

```python
def reset_volume_size() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.deleteOnTerminationInput">delete_on_termination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.encryptedInput">encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.noDeviceInput">no_device_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.volumeSizeInput">volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.noDevice">no_device</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice">LaunchConfigurationEbsBlockDevice</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_on_termination_input`<sup>Optional</sup> <a name="delete_on_termination_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```python
delete_on_termination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.encryptedInput"></a>

```python
encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `no_device_input`<sup>Optional</sup> <a name="no_device_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.noDeviceInput"></a>

```python
no_device_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size_input`<sup>Optional</sup> <a name="volume_size_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.volumeSizeInput"></a>

```python
volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `no_device`<sup>Required</sup> <a name="no_device" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.noDevice"></a>

```python
no_device: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDeviceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LaunchConfigurationEbsBlockDevice, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEbsBlockDevice">LaunchConfigurationEbsBlockDevice</a>, cdktf.IResolvable]

---


### LaunchConfigurationEphemeralBlockDeviceList <a name="LaunchConfigurationEphemeralBlockDeviceList" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_configuration

launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LaunchConfigurationEphemeralBlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice">LaunchConfigurationEphemeralBlockDevice</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LaunchConfigurationEphemeralBlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice">LaunchConfigurationEphemeralBlockDevice</a>]]

---


### LaunchConfigurationEphemeralBlockDeviceOutputReference <a name="LaunchConfigurationEphemeralBlockDeviceOutputReference" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_configuration

launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.resetNoDevice">reset_no_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.resetVirtualName">reset_virtual_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_no_device` <a name="reset_no_device" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.resetNoDevice"></a>

```python
def reset_no_device() -> None
```

##### `reset_virtual_name` <a name="reset_virtual_name" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.resetVirtualName"></a>

```python
def reset_virtual_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.noDeviceInput">no_device_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.virtualNameInput">virtual_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.noDevice">no_device</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.virtualName">virtual_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice">LaunchConfigurationEphemeralBlockDevice</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `no_device_input`<sup>Optional</sup> <a name="no_device_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.noDeviceInput"></a>

```python
no_device_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `virtual_name_input`<sup>Optional</sup> <a name="virtual_name_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.virtualNameInput"></a>

```python
virtual_name_input: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `no_device`<sup>Required</sup> <a name="no_device" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.noDevice"></a>

```python
no_device: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `virtual_name`<sup>Required</sup> <a name="virtual_name" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDeviceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LaunchConfigurationEphemeralBlockDevice, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationEphemeralBlockDevice">LaunchConfigurationEphemeralBlockDevice</a>, cdktf.IResolvable]

---


### LaunchConfigurationMetadataOptionsOutputReference <a name="LaunchConfigurationMetadataOptionsOutputReference" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_configuration

launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.resetHttpEndpoint">reset_http_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">reset_http_put_response_hop_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.resetHttpTokens">reset_http_tokens</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_http_endpoint` <a name="reset_http_endpoint" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```python
def reset_http_endpoint() -> None
```

##### `reset_http_put_response_hop_limit` <a name="reset_http_put_response_hop_limit" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```python
def reset_http_put_response_hop_limit() -> None
```

##### `reset_http_tokens` <a name="reset_http_tokens" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.resetHttpTokens"></a>

```python
def reset_http_tokens() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.httpEndpointInput">http_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">http_put_response_hop_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.httpTokensInput">http_tokens_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.httpEndpoint">http_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimit">http_put_response_hop_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.httpTokens">http_tokens</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions">LaunchConfigurationMetadataOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_endpoint_input`<sup>Optional</sup> <a name="http_endpoint_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```python
http_endpoint_input: str
```

- *Type:* str

---

##### `http_put_response_hop_limit_input`<sup>Optional</sup> <a name="http_put_response_hop_limit_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```python
http_put_response_hop_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_tokens_input`<sup>Optional</sup> <a name="http_tokens_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.httpTokensInput"></a>

```python
http_tokens_input: str
```

- *Type:* str

---

##### `http_endpoint`<sup>Required</sup> <a name="http_endpoint" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.httpEndpoint"></a>

```python
http_endpoint: str
```

- *Type:* str

---

##### `http_put_response_hop_limit`<sup>Required</sup> <a name="http_put_response_hop_limit" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```python
http_put_response_hop_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_tokens`<sup>Required</sup> <a name="http_tokens" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.httpTokens"></a>

```python
http_tokens: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptionsOutputReference.property.internalValue"></a>

```python
internal_value: LaunchConfigurationMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationMetadataOptions">LaunchConfigurationMetadataOptions</a>

---


### LaunchConfigurationRootBlockDeviceOutputReference <a name="LaunchConfigurationRootBlockDeviceOutputReference" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import launch_configuration

launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resetDeleteOnTermination">reset_delete_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resetVolumeSize">reset_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_on_termination` <a name="reset_delete_on_termination" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resetDeleteOnTermination"></a>

```python
def reset_delete_on_termination() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_size` <a name="reset_volume_size" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resetVolumeSize"></a>

```python
def reset_volume_size() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.deleteOnTerminationInput">delete_on_termination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.encryptedInput">encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.volumeSizeInput">volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice">LaunchConfigurationRootBlockDevice</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_on_termination_input`<sup>Optional</sup> <a name="delete_on_termination_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```python
delete_on_termination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.encryptedInput"></a>

```python
encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size_input`<sup>Optional</sup> <a name="volume_size_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.volumeSizeInput"></a>

```python
volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDeviceOutputReference.property.internalValue"></a>

```python
internal_value: LaunchConfigurationRootBlockDevice
```

- *Type:* <a href="#@cdktf/provider-aws.launchConfiguration.LaunchConfigurationRootBlockDevice">LaunchConfigurationRootBlockDevice</a>

---



