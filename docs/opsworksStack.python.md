# `opsworksStack` Submodule <a name="`opsworksStack` Submodule" id="@cdktf/provider-aws.opsworksStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksStack <a name="OpsworksStack" id="@cdktf/provider-aws.opsworksStack.OpsworksStack"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack aws_opsworks_stack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_stack

opsworksStack.OpsworksStack(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_instance_profile_arn: str,
  name: str,
  region: str,
  service_role_arn: str,
  agent_version: str = None,
  berkshelf_version: str = None,
  color: str = None,
  configuration_manager_name: str = None,
  configuration_manager_version: str = None,
  custom_cookbooks_source: OpsworksStackCustomCookbooksSource = None,
  custom_json: str = None,
  default_availability_zone: str = None,
  default_os: str = None,
  default_root_device_type: str = None,
  default_ssh_key_name: str = None,
  default_subnet_id: str = None,
  hostname_theme: str = None,
  id: str = None,
  manage_berkshelf: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: OpsworksStackTimeouts = None,
  use_custom_cookbooks: typing.Union[bool, IResolvable] = None,
  use_opsworks_security_groups: typing.Union[bool, IResolvable] = None,
  vpc_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.defaultInstanceProfileArn">default_instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_instance_profile_arn OpsworksStack#default_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#name OpsworksStack#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#region OpsworksStack#region}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.serviceRoleArn">service_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#service_role_arn OpsworksStack#service_role_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.agentVersion">agent_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#agent_version OpsworksStack#agent_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.berkshelfVersion">berkshelf_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#berkshelf_version OpsworksStack#berkshelf_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.color">color</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#color OpsworksStack#color}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.configurationManagerName">configuration_manager_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_name OpsworksStack#configuration_manager_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.configurationManagerVersion">configuration_manager_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_version OpsworksStack#configuration_manager_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.customCookbooksSource">custom_cookbooks_source</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a></code> | custom_cookbooks_source block. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.customJson">custom_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#custom_json OpsworksStack#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.defaultAvailabilityZone">default_availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_availability_zone OpsworksStack#default_availability_zone}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.defaultOs">default_os</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_os OpsworksStack#default_os}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.defaultRootDeviceType">default_root_device_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_root_device_type OpsworksStack#default_root_device_type}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.defaultSshKeyName">default_ssh_key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_ssh_key_name OpsworksStack#default_ssh_key_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.defaultSubnetId">default_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_subnet_id OpsworksStack#default_subnet_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.hostnameTheme">hostname_theme</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#hostname_theme OpsworksStack#hostname_theme}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#id OpsworksStack#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.manageBerkshelf">manage_berkshelf</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#manage_berkshelf OpsworksStack#manage_berkshelf}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags OpsworksStack#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags_all OpsworksStack#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.useCustomCookbooks">use_custom_cookbooks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_custom_cookbooks OpsworksStack#use_custom_cookbooks}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.useOpsworksSecurityGroups">use_opsworks_security_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_opsworks_security_groups OpsworksStack#use_opsworks_security_groups}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#vpc_id OpsworksStack#vpc_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_instance_profile_arn`<sup>Required</sup> <a name="default_instance_profile_arn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.defaultInstanceProfileArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_instance_profile_arn OpsworksStack#default_instance_profile_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#name OpsworksStack#name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#region OpsworksStack#region}.

---

##### `service_role_arn`<sup>Required</sup> <a name="service_role_arn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.serviceRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#service_role_arn OpsworksStack#service_role_arn}.

---

##### `agent_version`<sup>Optional</sup> <a name="agent_version" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.agentVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#agent_version OpsworksStack#agent_version}.

---

##### `berkshelf_version`<sup>Optional</sup> <a name="berkshelf_version" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.berkshelfVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#berkshelf_version OpsworksStack#berkshelf_version}.

---

##### `color`<sup>Optional</sup> <a name="color" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.color"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#color OpsworksStack#color}.

---

##### `configuration_manager_name`<sup>Optional</sup> <a name="configuration_manager_name" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.configurationManagerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_name OpsworksStack#configuration_manager_name}.

---

##### `configuration_manager_version`<sup>Optional</sup> <a name="configuration_manager_version" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.configurationManagerVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_version OpsworksStack#configuration_manager_version}.

---

##### `custom_cookbooks_source`<sup>Optional</sup> <a name="custom_cookbooks_source" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.customCookbooksSource"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>

custom_cookbooks_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#custom_cookbooks_source OpsworksStack#custom_cookbooks_source}

---

##### `custom_json`<sup>Optional</sup> <a name="custom_json" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.customJson"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#custom_json OpsworksStack#custom_json}.

---

##### `default_availability_zone`<sup>Optional</sup> <a name="default_availability_zone" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.defaultAvailabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_availability_zone OpsworksStack#default_availability_zone}.

---

##### `default_os`<sup>Optional</sup> <a name="default_os" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.defaultOs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_os OpsworksStack#default_os}.

---

##### `default_root_device_type`<sup>Optional</sup> <a name="default_root_device_type" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.defaultRootDeviceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_root_device_type OpsworksStack#default_root_device_type}.

---

##### `default_ssh_key_name`<sup>Optional</sup> <a name="default_ssh_key_name" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.defaultSshKeyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_ssh_key_name OpsworksStack#default_ssh_key_name}.

---

##### `default_subnet_id`<sup>Optional</sup> <a name="default_subnet_id" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.defaultSubnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_subnet_id OpsworksStack#default_subnet_id}.

---

##### `hostname_theme`<sup>Optional</sup> <a name="hostname_theme" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.hostnameTheme"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#hostname_theme OpsworksStack#hostname_theme}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#id OpsworksStack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `manage_berkshelf`<sup>Optional</sup> <a name="manage_berkshelf" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.manageBerkshelf"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#manage_berkshelf OpsworksStack#manage_berkshelf}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags OpsworksStack#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags_all OpsworksStack#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#timeouts OpsworksStack#timeouts}

---

##### `use_custom_cookbooks`<sup>Optional</sup> <a name="use_custom_cookbooks" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.useCustomCookbooks"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_custom_cookbooks OpsworksStack#use_custom_cookbooks}.

---

##### `use_opsworks_security_groups`<sup>Optional</sup> <a name="use_opsworks_security_groups" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.useOpsworksSecurityGroups"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_opsworks_security_groups OpsworksStack#use_opsworks_security_groups}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#vpc_id OpsworksStack#vpc_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.putCustomCookbooksSource">put_custom_cookbooks_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetAgentVersion">reset_agent_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetBerkshelfVersion">reset_berkshelf_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetColor">reset_color</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetConfigurationManagerName">reset_configuration_manager_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetConfigurationManagerVersion">reset_configuration_manager_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetCustomCookbooksSource">reset_custom_cookbooks_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetCustomJson">reset_custom_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultAvailabilityZone">reset_default_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultOs">reset_default_os</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultRootDeviceType">reset_default_root_device_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultSshKeyName">reset_default_ssh_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultSubnetId">reset_default_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetHostnameTheme">reset_hostname_theme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetManageBerkshelf">reset_manage_berkshelf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetUseCustomCookbooks">reset_use_custom_cookbooks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetUseOpsworksSecurityGroups">reset_use_opsworks_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_custom_cookbooks_source` <a name="put_custom_cookbooks_source" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.putCustomCookbooksSource"></a>

```python
def put_custom_cookbooks_source(
  type: str,
  url: str,
  password: str = None,
  revision: str = None,
  ssh_key: str = None,
  username: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.putCustomCookbooksSource.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#type OpsworksStack#type}.

---

###### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.putCustomCookbooksSource.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#url OpsworksStack#url}.

---

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.putCustomCookbooksSource.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#password OpsworksStack#password}.

---

###### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.putCustomCookbooksSource.parameter.revision"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#revision OpsworksStack#revision}.

---

###### `ssh_key`<sup>Optional</sup> <a name="ssh_key" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.putCustomCookbooksSource.parameter.sshKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#ssh_key OpsworksStack#ssh_key}.

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.putCustomCookbooksSource.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#username OpsworksStack#username}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#create OpsworksStack#create}.

---

##### `reset_agent_version` <a name="reset_agent_version" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetAgentVersion"></a>

```python
def reset_agent_version() -> None
```

##### `reset_berkshelf_version` <a name="reset_berkshelf_version" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetBerkshelfVersion"></a>

```python
def reset_berkshelf_version() -> None
```

##### `reset_color` <a name="reset_color" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetColor"></a>

```python
def reset_color() -> None
```

##### `reset_configuration_manager_name` <a name="reset_configuration_manager_name" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetConfigurationManagerName"></a>

```python
def reset_configuration_manager_name() -> None
```

##### `reset_configuration_manager_version` <a name="reset_configuration_manager_version" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetConfigurationManagerVersion"></a>

```python
def reset_configuration_manager_version() -> None
```

##### `reset_custom_cookbooks_source` <a name="reset_custom_cookbooks_source" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetCustomCookbooksSource"></a>

```python
def reset_custom_cookbooks_source() -> None
```

##### `reset_custom_json` <a name="reset_custom_json" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetCustomJson"></a>

```python
def reset_custom_json() -> None
```

##### `reset_default_availability_zone` <a name="reset_default_availability_zone" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultAvailabilityZone"></a>

```python
def reset_default_availability_zone() -> None
```

##### `reset_default_os` <a name="reset_default_os" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultOs"></a>

```python
def reset_default_os() -> None
```

##### `reset_default_root_device_type` <a name="reset_default_root_device_type" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultRootDeviceType"></a>

```python
def reset_default_root_device_type() -> None
```

##### `reset_default_ssh_key_name` <a name="reset_default_ssh_key_name" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultSshKeyName"></a>

```python
def reset_default_ssh_key_name() -> None
```

##### `reset_default_subnet_id` <a name="reset_default_subnet_id" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetDefaultSubnetId"></a>

```python
def reset_default_subnet_id() -> None
```

##### `reset_hostname_theme` <a name="reset_hostname_theme" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetHostnameTheme"></a>

```python
def reset_hostname_theme() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_manage_berkshelf` <a name="reset_manage_berkshelf" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetManageBerkshelf"></a>

```python
def reset_manage_berkshelf() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_use_custom_cookbooks` <a name="reset_use_custom_cookbooks" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetUseCustomCookbooks"></a>

```python
def reset_use_custom_cookbooks() -> None
```

##### `reset_use_opsworks_security_groups` <a name="reset_use_opsworks_security_groups" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetUseOpsworksSecurityGroups"></a>

```python
def reset_use_opsworks_security_groups() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_stack

opsworksStack.OpsworksStack.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_stack

opsworksStack.OpsworksStack.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_stack

opsworksStack.OpsworksStack.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customCookbooksSource">custom_cookbooks_source</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference">OpsworksStackCustomCookbooksSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.stackEndpoint">stack_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference">OpsworksStackTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.agentVersionInput">agent_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.berkshelfVersionInput">berkshelf_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.colorInput">color_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerNameInput">configuration_manager_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerVersionInput">configuration_manager_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customCookbooksSourceInput">custom_cookbooks_source_input</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customJsonInput">custom_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultAvailabilityZoneInput">default_availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultInstanceProfileArnInput">default_instance_profile_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultOsInput">default_os_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultRootDeviceTypeInput">default_root_device_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSshKeyNameInput">default_ssh_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSubnetIdInput">default_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.hostnameThemeInput">hostname_theme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.manageBerkshelfInput">manage_berkshelf_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.serviceRoleArnInput">service_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useCustomCookbooksInput">use_custom_cookbooks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useOpsworksSecurityGroupsInput">use_opsworks_security_groups_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.agentVersion">agent_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.berkshelfVersion">berkshelf_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.color">color</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerName">configuration_manager_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerVersion">configuration_manager_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customJson">custom_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultAvailabilityZone">default_availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultInstanceProfileArn">default_instance_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultOs">default_os</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultRootDeviceType">default_root_device_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSshKeyName">default_ssh_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSubnetId">default_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.hostnameTheme">hostname_theme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.manageBerkshelf">manage_berkshelf</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.serviceRoleArn">service_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useCustomCookbooks">use_custom_cookbooks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useOpsworksSecurityGroups">use_opsworks_security_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `custom_cookbooks_source`<sup>Required</sup> <a name="custom_cookbooks_source" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customCookbooksSource"></a>

```python
custom_cookbooks_source: OpsworksStackCustomCookbooksSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference">OpsworksStackCustomCookbooksSourceOutputReference</a>

---

##### `stack_endpoint`<sup>Required</sup> <a name="stack_endpoint" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.stackEndpoint"></a>

```python
stack_endpoint: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.timeouts"></a>

```python
timeouts: OpsworksStackTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference">OpsworksStackTimeoutsOutputReference</a>

---

##### `agent_version_input`<sup>Optional</sup> <a name="agent_version_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.agentVersionInput"></a>

```python
agent_version_input: str
```

- *Type:* str

---

##### `berkshelf_version_input`<sup>Optional</sup> <a name="berkshelf_version_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.berkshelfVersionInput"></a>

```python
berkshelf_version_input: str
```

- *Type:* str

---

##### `color_input`<sup>Optional</sup> <a name="color_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.colorInput"></a>

```python
color_input: str
```

- *Type:* str

---

##### `configuration_manager_name_input`<sup>Optional</sup> <a name="configuration_manager_name_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerNameInput"></a>

```python
configuration_manager_name_input: str
```

- *Type:* str

---

##### `configuration_manager_version_input`<sup>Optional</sup> <a name="configuration_manager_version_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerVersionInput"></a>

```python
configuration_manager_version_input: str
```

- *Type:* str

---

##### `custom_cookbooks_source_input`<sup>Optional</sup> <a name="custom_cookbooks_source_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customCookbooksSourceInput"></a>

```python
custom_cookbooks_source_input: OpsworksStackCustomCookbooksSource
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>

---

##### `custom_json_input`<sup>Optional</sup> <a name="custom_json_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customJsonInput"></a>

```python
custom_json_input: str
```

- *Type:* str

---

##### `default_availability_zone_input`<sup>Optional</sup> <a name="default_availability_zone_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultAvailabilityZoneInput"></a>

```python
default_availability_zone_input: str
```

- *Type:* str

---

##### `default_instance_profile_arn_input`<sup>Optional</sup> <a name="default_instance_profile_arn_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultInstanceProfileArnInput"></a>

```python
default_instance_profile_arn_input: str
```

- *Type:* str

---

##### `default_os_input`<sup>Optional</sup> <a name="default_os_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultOsInput"></a>

```python
default_os_input: str
```

- *Type:* str

---

##### `default_root_device_type_input`<sup>Optional</sup> <a name="default_root_device_type_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultRootDeviceTypeInput"></a>

```python
default_root_device_type_input: str
```

- *Type:* str

---

##### `default_ssh_key_name_input`<sup>Optional</sup> <a name="default_ssh_key_name_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSshKeyNameInput"></a>

```python
default_ssh_key_name_input: str
```

- *Type:* str

---

##### `default_subnet_id_input`<sup>Optional</sup> <a name="default_subnet_id_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSubnetIdInput"></a>

```python
default_subnet_id_input: str
```

- *Type:* str

---

##### `hostname_theme_input`<sup>Optional</sup> <a name="hostname_theme_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.hostnameThemeInput"></a>

```python
hostname_theme_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `manage_berkshelf_input`<sup>Optional</sup> <a name="manage_berkshelf_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.manageBerkshelfInput"></a>

```python
manage_berkshelf_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `service_role_arn_input`<sup>Optional</sup> <a name="service_role_arn_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.serviceRoleArnInput"></a>

```python
service_role_arn_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[OpsworksStackTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a>, cdktf.IResolvable]

---

##### `use_custom_cookbooks_input`<sup>Optional</sup> <a name="use_custom_cookbooks_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useCustomCookbooksInput"></a>

```python
use_custom_cookbooks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_opsworks_security_groups_input`<sup>Optional</sup> <a name="use_opsworks_security_groups_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useOpsworksSecurityGroupsInput"></a>

```python
use_opsworks_security_groups_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `agent_version`<sup>Required</sup> <a name="agent_version" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.agentVersion"></a>

```python
agent_version: str
```

- *Type:* str

---

##### `berkshelf_version`<sup>Required</sup> <a name="berkshelf_version" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.berkshelfVersion"></a>

```python
berkshelf_version: str
```

- *Type:* str

---

##### `color`<sup>Required</sup> <a name="color" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.color"></a>

```python
color: str
```

- *Type:* str

---

##### `configuration_manager_name`<sup>Required</sup> <a name="configuration_manager_name" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerName"></a>

```python
configuration_manager_name: str
```

- *Type:* str

---

##### `configuration_manager_version`<sup>Required</sup> <a name="configuration_manager_version" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.configurationManagerVersion"></a>

```python
configuration_manager_version: str
```

- *Type:* str

---

##### `custom_json`<sup>Required</sup> <a name="custom_json" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.customJson"></a>

```python
custom_json: str
```

- *Type:* str

---

##### `default_availability_zone`<sup>Required</sup> <a name="default_availability_zone" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultAvailabilityZone"></a>

```python
default_availability_zone: str
```

- *Type:* str

---

##### `default_instance_profile_arn`<sup>Required</sup> <a name="default_instance_profile_arn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultInstanceProfileArn"></a>

```python
default_instance_profile_arn: str
```

- *Type:* str

---

##### `default_os`<sup>Required</sup> <a name="default_os" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultOs"></a>

```python
default_os: str
```

- *Type:* str

---

##### `default_root_device_type`<sup>Required</sup> <a name="default_root_device_type" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultRootDeviceType"></a>

```python
default_root_device_type: str
```

- *Type:* str

---

##### `default_ssh_key_name`<sup>Required</sup> <a name="default_ssh_key_name" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSshKeyName"></a>

```python
default_ssh_key_name: str
```

- *Type:* str

---

##### `default_subnet_id`<sup>Required</sup> <a name="default_subnet_id" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.defaultSubnetId"></a>

```python
default_subnet_id: str
```

- *Type:* str

---

##### `hostname_theme`<sup>Required</sup> <a name="hostname_theme" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.hostnameTheme"></a>

```python
hostname_theme: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `manage_berkshelf`<sup>Required</sup> <a name="manage_berkshelf" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.manageBerkshelf"></a>

```python
manage_berkshelf: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `service_role_arn`<sup>Required</sup> <a name="service_role_arn" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.serviceRoleArn"></a>

```python
service_role_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `use_custom_cookbooks`<sup>Required</sup> <a name="use_custom_cookbooks" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useCustomCookbooks"></a>

```python
use_custom_cookbooks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_opsworks_security_groups`<sup>Required</sup> <a name="use_opsworks_security_groups" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.useOpsworksSecurityGroups"></a>

```python
use_opsworks_security_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opsworksStack.OpsworksStack.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksStackConfig <a name="OpsworksStackConfig" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_stack

opsworksStack.OpsworksStackConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_instance_profile_arn: str,
  name: str,
  region: str,
  service_role_arn: str,
  agent_version: str = None,
  berkshelf_version: str = None,
  color: str = None,
  configuration_manager_name: str = None,
  configuration_manager_version: str = None,
  custom_cookbooks_source: OpsworksStackCustomCookbooksSource = None,
  custom_json: str = None,
  default_availability_zone: str = None,
  default_os: str = None,
  default_root_device_type: str = None,
  default_ssh_key_name: str = None,
  default_subnet_id: str = None,
  hostname_theme: str = None,
  id: str = None,
  manage_berkshelf: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: OpsworksStackTimeouts = None,
  use_custom_cookbooks: typing.Union[bool, IResolvable] = None,
  use_opsworks_security_groups: typing.Union[bool, IResolvable] = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultInstanceProfileArn">default_instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_instance_profile_arn OpsworksStack#default_instance_profile_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#name OpsworksStack#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#region OpsworksStack#region}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.serviceRoleArn">service_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#service_role_arn OpsworksStack#service_role_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.agentVersion">agent_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#agent_version OpsworksStack#agent_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.berkshelfVersion">berkshelf_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#berkshelf_version OpsworksStack#berkshelf_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.color">color</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#color OpsworksStack#color}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.configurationManagerName">configuration_manager_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_name OpsworksStack#configuration_manager_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.configurationManagerVersion">configuration_manager_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_version OpsworksStack#configuration_manager_version}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.customCookbooksSource">custom_cookbooks_source</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a></code> | custom_cookbooks_source block. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.customJson">custom_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#custom_json OpsworksStack#custom_json}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultAvailabilityZone">default_availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_availability_zone OpsworksStack#default_availability_zone}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultOs">default_os</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_os OpsworksStack#default_os}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultRootDeviceType">default_root_device_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_root_device_type OpsworksStack#default_root_device_type}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultSshKeyName">default_ssh_key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_ssh_key_name OpsworksStack#default_ssh_key_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultSubnetId">default_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_subnet_id OpsworksStack#default_subnet_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.hostnameTheme">hostname_theme</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#hostname_theme OpsworksStack#hostname_theme}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#id OpsworksStack#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.manageBerkshelf">manage_berkshelf</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#manage_berkshelf OpsworksStack#manage_berkshelf}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags OpsworksStack#tags}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags_all OpsworksStack#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.useCustomCookbooks">use_custom_cookbooks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_custom_cookbooks OpsworksStack#use_custom_cookbooks}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.useOpsworksSecurityGroups">use_opsworks_security_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_opsworks_security_groups OpsworksStack#use_opsworks_security_groups}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#vpc_id OpsworksStack#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_instance_profile_arn`<sup>Required</sup> <a name="default_instance_profile_arn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultInstanceProfileArn"></a>

```python
default_instance_profile_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_instance_profile_arn OpsworksStack#default_instance_profile_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#name OpsworksStack#name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#region OpsworksStack#region}.

---

##### `service_role_arn`<sup>Required</sup> <a name="service_role_arn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.serviceRoleArn"></a>

```python
service_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#service_role_arn OpsworksStack#service_role_arn}.

---

##### `agent_version`<sup>Optional</sup> <a name="agent_version" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.agentVersion"></a>

```python
agent_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#agent_version OpsworksStack#agent_version}.

---

##### `berkshelf_version`<sup>Optional</sup> <a name="berkshelf_version" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.berkshelfVersion"></a>

```python
berkshelf_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#berkshelf_version OpsworksStack#berkshelf_version}.

---

##### `color`<sup>Optional</sup> <a name="color" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.color"></a>

```python
color: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#color OpsworksStack#color}.

---

##### `configuration_manager_name`<sup>Optional</sup> <a name="configuration_manager_name" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.configurationManagerName"></a>

```python
configuration_manager_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_name OpsworksStack#configuration_manager_name}.

---

##### `configuration_manager_version`<sup>Optional</sup> <a name="configuration_manager_version" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.configurationManagerVersion"></a>

```python
configuration_manager_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#configuration_manager_version OpsworksStack#configuration_manager_version}.

---

##### `custom_cookbooks_source`<sup>Optional</sup> <a name="custom_cookbooks_source" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.customCookbooksSource"></a>

```python
custom_cookbooks_source: OpsworksStackCustomCookbooksSource
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>

custom_cookbooks_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#custom_cookbooks_source OpsworksStack#custom_cookbooks_source}

---

##### `custom_json`<sup>Optional</sup> <a name="custom_json" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.customJson"></a>

```python
custom_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#custom_json OpsworksStack#custom_json}.

---

##### `default_availability_zone`<sup>Optional</sup> <a name="default_availability_zone" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultAvailabilityZone"></a>

```python
default_availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_availability_zone OpsworksStack#default_availability_zone}.

---

##### `default_os`<sup>Optional</sup> <a name="default_os" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultOs"></a>

```python
default_os: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_os OpsworksStack#default_os}.

---

##### `default_root_device_type`<sup>Optional</sup> <a name="default_root_device_type" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultRootDeviceType"></a>

```python
default_root_device_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_root_device_type OpsworksStack#default_root_device_type}.

---

##### `default_ssh_key_name`<sup>Optional</sup> <a name="default_ssh_key_name" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultSshKeyName"></a>

```python
default_ssh_key_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_ssh_key_name OpsworksStack#default_ssh_key_name}.

---

##### `default_subnet_id`<sup>Optional</sup> <a name="default_subnet_id" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.defaultSubnetId"></a>

```python
default_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#default_subnet_id OpsworksStack#default_subnet_id}.

---

##### `hostname_theme`<sup>Optional</sup> <a name="hostname_theme" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.hostnameTheme"></a>

```python
hostname_theme: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#hostname_theme OpsworksStack#hostname_theme}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#id OpsworksStack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `manage_berkshelf`<sup>Optional</sup> <a name="manage_berkshelf" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.manageBerkshelf"></a>

```python
manage_berkshelf: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#manage_berkshelf OpsworksStack#manage_berkshelf}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags OpsworksStack#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#tags_all OpsworksStack#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.timeouts"></a>

```python
timeouts: OpsworksStackTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#timeouts OpsworksStack#timeouts}

---

##### `use_custom_cookbooks`<sup>Optional</sup> <a name="use_custom_cookbooks" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.useCustomCookbooks"></a>

```python
use_custom_cookbooks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_custom_cookbooks OpsworksStack#use_custom_cookbooks}.

---

##### `use_opsworks_security_groups`<sup>Optional</sup> <a name="use_opsworks_security_groups" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.useOpsworksSecurityGroups"></a>

```python
use_opsworks_security_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#use_opsworks_security_groups OpsworksStack#use_opsworks_security_groups}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-aws.opsworksStack.OpsworksStackConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#vpc_id OpsworksStack#vpc_id}.

---

### OpsworksStackCustomCookbooksSource <a name="OpsworksStackCustomCookbooksSource" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_stack

opsworksStack.OpsworksStackCustomCookbooksSource(
  type: str,
  url: str,
  password: str = None,
  revision: str = None,
  ssh_key: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#type OpsworksStack#type}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#url OpsworksStack#url}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#password OpsworksStack#password}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.revision">revision</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#revision OpsworksStack#revision}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.sshKey">ssh_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#ssh_key OpsworksStack#ssh_key}. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#username OpsworksStack#username}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#type OpsworksStack#type}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#url OpsworksStack#url}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#password OpsworksStack#password}.

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.revision"></a>

```python
revision: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#revision OpsworksStack#revision}.

---

##### `ssh_key`<sup>Optional</sup> <a name="ssh_key" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.sshKey"></a>

```python
ssh_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#ssh_key OpsworksStack#ssh_key}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#username OpsworksStack#username}.

---

### OpsworksStackTimeouts <a name="OpsworksStackTimeouts" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_stack

opsworksStack.OpsworksStackTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#create OpsworksStack#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack#create OpsworksStack#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksStackCustomCookbooksSourceOutputReference <a name="OpsworksStackCustomCookbooksSourceOutputReference" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_stack

opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetRevision">reset_revision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetSshKey">reset_ssh_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_revision` <a name="reset_revision" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetRevision"></a>

```python
def reset_revision() -> None
```

##### `reset_ssh_key` <a name="reset_ssh_key" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetSshKey"></a>

```python
def reset_ssh_key() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.revisionInput">revision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.sshKeyInput">ssh_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.revision">revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.sshKey">ssh_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `revision_input`<sup>Optional</sup> <a name="revision_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.revisionInput"></a>

```python
revision_input: str
```

- *Type:* str

---

##### `ssh_key_input`<sup>Optional</sup> <a name="ssh_key_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.sshKeyInput"></a>

```python
ssh_key_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.revision"></a>

```python
revision: str
```

- *Type:* str

---

##### `ssh_key`<sup>Required</sup> <a name="ssh_key" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.sshKey"></a>

```python
ssh_key: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSourceOutputReference.property.internalValue"></a>

```python
internal_value: OpsworksStackCustomCookbooksSource
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackCustomCookbooksSource">OpsworksStackCustomCookbooksSource</a>

---


### OpsworksStackTimeoutsOutputReference <a name="OpsworksStackTimeoutsOutputReference" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opsworks_stack

opsworksStack.OpsworksStackTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opsworksStack.OpsworksStackTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[OpsworksStackTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.opsworksStack.OpsworksStackTimeouts">OpsworksStackTimeouts</a>, cdktf.IResolvable]

---



