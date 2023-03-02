# `directoryServiceDirectory` Submodule <a name="`directoryServiceDirectory` Submodule" id="@cdktf/provider-aws.directoryServiceDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceDirectory <a name="DirectoryServiceDirectory" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory aws_directory_service_directory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_directory

directoryServiceDirectory.DirectoryServiceDirectory(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  password: str,
  alias: str = None,
  connect_settings: DirectoryServiceDirectoryConnectSettings = None,
  description: str = None,
  desired_number_of_domain_controllers: typing.Union[int, float] = None,
  edition: str = None,
  enable_sso: typing.Union[bool, IResolvable] = None,
  id: str = None,
  short_name: str = None,
  size: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DirectoryServiceDirectoryTimeouts = None,
  type: str = None,
  vpc_settings: DirectoryServiceDirectoryVpcSettings = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#name DirectoryServiceDirectory#name}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#password DirectoryServiceDirectory#password}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#alias DirectoryServiceDirectory#alias}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.connectSettings">connect_settings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a></code> | connect_settings block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#description DirectoryServiceDirectory#description}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.desiredNumberOfDomainControllers">desired_number_of_domain_controllers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#desired_number_of_domain_controllers DirectoryServiceDirectory#desired_number_of_domain_controllers}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.edition">edition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#edition DirectoryServiceDirectory#edition}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.enableSso">enable_sso</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#enable_sso DirectoryServiceDirectory#enable_sso}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#id DirectoryServiceDirectory#id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.shortName">short_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#short_name DirectoryServiceDirectory#short_name}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.size">size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#size DirectoryServiceDirectory#size}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#tags DirectoryServiceDirectory#tags}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#tags_all DirectoryServiceDirectory#tags_all}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#type DirectoryServiceDirectory#type}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.vpcSettings">vpc_settings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a></code> | vpc_settings block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#name DirectoryServiceDirectory#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#password DirectoryServiceDirectory#password}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.alias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#alias DirectoryServiceDirectory#alias}.

---

##### `connect_settings`<sup>Optional</sup> <a name="connect_settings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.connectSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a>

connect_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#connect_settings DirectoryServiceDirectory#connect_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#description DirectoryServiceDirectory#description}.

---

##### `desired_number_of_domain_controllers`<sup>Optional</sup> <a name="desired_number_of_domain_controllers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.desiredNumberOfDomainControllers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#desired_number_of_domain_controllers DirectoryServiceDirectory#desired_number_of_domain_controllers}.

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.edition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#edition DirectoryServiceDirectory#edition}.

---

##### `enable_sso`<sup>Optional</sup> <a name="enable_sso" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.enableSso"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#enable_sso DirectoryServiceDirectory#enable_sso}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#id DirectoryServiceDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `short_name`<sup>Optional</sup> <a name="short_name" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.shortName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#short_name DirectoryServiceDirectory#short_name}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.size"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#size DirectoryServiceDirectory#size}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#tags DirectoryServiceDirectory#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#tags_all DirectoryServiceDirectory#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#timeouts DirectoryServiceDirectory#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#type DirectoryServiceDirectory#type}.

---

##### `vpc_settings`<sup>Optional</sup> <a name="vpc_settings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.Initializer.parameter.vpcSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a>

vpc_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#vpc_settings DirectoryServiceDirectory#vpc_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putConnectSettings">put_connect_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putVpcSettings">put_vpc_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetConnectSettings">reset_connect_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetDesiredNumberOfDomainControllers">reset_desired_number_of_domain_controllers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetEdition">reset_edition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetEnableSso">reset_enable_sso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetShortName">reset_short_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetSize">reset_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetVpcSettings">reset_vpc_settings</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_connect_settings` <a name="put_connect_settings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putConnectSettings"></a>

```python
def put_connect_settings(
  customer_dns_ips: typing.List[str],
  customer_username: str,
  subnet_ids: typing.List[str],
  vpc_id: str
) -> None
```

###### `customer_dns_ips`<sup>Required</sup> <a name="customer_dns_ips" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putConnectSettings.parameter.customerDnsIps"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#customer_dns_ips DirectoryServiceDirectory#customer_dns_ips}.

---

###### `customer_username`<sup>Required</sup> <a name="customer_username" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putConnectSettings.parameter.customerUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#customer_username DirectoryServiceDirectory#customer_username}.

---

###### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putConnectSettings.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#subnet_ids DirectoryServiceDirectory#subnet_ids}.

---

###### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putConnectSettings.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#vpc_id DirectoryServiceDirectory#vpc_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#create DirectoryServiceDirectory#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#delete DirectoryServiceDirectory#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#update DirectoryServiceDirectory#update}.

---

##### `put_vpc_settings` <a name="put_vpc_settings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putVpcSettings"></a>

```python
def put_vpc_settings(
  subnet_ids: typing.List[str],
  vpc_id: str
) -> None
```

###### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putVpcSettings.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#subnet_ids DirectoryServiceDirectory#subnet_ids}.

---

###### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.putVpcSettings.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#vpc_id DirectoryServiceDirectory#vpc_id}.

---

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_connect_settings` <a name="reset_connect_settings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetConnectSettings"></a>

```python
def reset_connect_settings() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_desired_number_of_domain_controllers` <a name="reset_desired_number_of_domain_controllers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetDesiredNumberOfDomainControllers"></a>

```python
def reset_desired_number_of_domain_controllers() -> None
```

##### `reset_edition` <a name="reset_edition" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetEdition"></a>

```python
def reset_edition() -> None
```

##### `reset_enable_sso` <a name="reset_enable_sso" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetEnableSso"></a>

```python
def reset_enable_sso() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_short_name` <a name="reset_short_name" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetShortName"></a>

```python
def reset_short_name() -> None
```

##### `reset_size` <a name="reset_size" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetSize"></a>

```python
def reset_size() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_vpc_settings` <a name="reset_vpc_settings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.resetVpcSettings"></a>

```python
def reset_vpc_settings() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_directory

directoryServiceDirectory.DirectoryServiceDirectory.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_directory

directoryServiceDirectory.DirectoryServiceDirectory.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_directory

directoryServiceDirectory.DirectoryServiceDirectory.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.accessUrl">access_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connectSettings">connect_settings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference">DirectoryServiceDirectoryConnectSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.dnsIpAddresses">dns_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference">DirectoryServiceDirectoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.vpcSettings">vpc_settings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference">DirectoryServiceDirectoryVpcSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connectSettingsInput">connect_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.desiredNumberOfDomainControllersInput">desired_number_of_domain_controllers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.editionInput">edition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.enableSsoInput">enable_sso_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.shortNameInput">short_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.sizeInput">size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.vpcSettingsInput">vpc_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.desiredNumberOfDomainControllers">desired_number_of_domain_controllers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.edition">edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.enableSso">enable_sso</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.shortName">short_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.size">size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_url`<sup>Required</sup> <a name="access_url" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.accessUrl"></a>

```python
access_url: str
```

- *Type:* str

---

##### `connect_settings`<sup>Required</sup> <a name="connect_settings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connectSettings"></a>

```python
connect_settings: DirectoryServiceDirectoryConnectSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference">DirectoryServiceDirectoryConnectSettingsOutputReference</a>

---

##### `dns_ip_addresses`<sup>Required</sup> <a name="dns_ip_addresses" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.dnsIpAddresses"></a>

```python
dns_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.timeouts"></a>

```python
timeouts: DirectoryServiceDirectoryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference">DirectoryServiceDirectoryTimeoutsOutputReference</a>

---

##### `vpc_settings`<sup>Required</sup> <a name="vpc_settings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.vpcSettings"></a>

```python
vpc_settings: DirectoryServiceDirectoryVpcSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference">DirectoryServiceDirectoryVpcSettingsOutputReference</a>

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `connect_settings_input`<sup>Optional</sup> <a name="connect_settings_input" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.connectSettingsInput"></a>

```python
connect_settings_input: DirectoryServiceDirectoryConnectSettings
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `desired_number_of_domain_controllers_input`<sup>Optional</sup> <a name="desired_number_of_domain_controllers_input" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.desiredNumberOfDomainControllersInput"></a>

```python
desired_number_of_domain_controllers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `edition_input`<sup>Optional</sup> <a name="edition_input" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.editionInput"></a>

```python
edition_input: str
```

- *Type:* str

---

##### `enable_sso_input`<sup>Optional</sup> <a name="enable_sso_input" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.enableSsoInput"></a>

```python
enable_sso_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `short_name_input`<sup>Optional</sup> <a name="short_name_input" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.shortNameInput"></a>

```python
short_name_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.sizeInput"></a>

```python
size_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DirectoryServiceDirectoryTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a>, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vpc_settings_input`<sup>Optional</sup> <a name="vpc_settings_input" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.vpcSettingsInput"></a>

```python
vpc_settings_input: DirectoryServiceDirectoryVpcSettings
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `desired_number_of_domain_controllers`<sup>Required</sup> <a name="desired_number_of_domain_controllers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.desiredNumberOfDomainControllers"></a>

```python
desired_number_of_domain_controllers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.edition"></a>

```python
edition: str
```

- *Type:* str

---

##### `enable_sso`<sup>Required</sup> <a name="enable_sso" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.enableSso"></a>

```python
enable_sso: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `short_name`<sup>Required</sup> <a name="short_name" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.shortName"></a>

```python
short_name: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.size"></a>

```python
size: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectory.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceDirectoryConfig <a name="DirectoryServiceDirectoryConfig" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_directory

directoryServiceDirectory.DirectoryServiceDirectoryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  password: str,
  alias: str = None,
  connect_settings: DirectoryServiceDirectoryConnectSettings = None,
  description: str = None,
  desired_number_of_domain_controllers: typing.Union[int, float] = None,
  edition: str = None,
  enable_sso: typing.Union[bool, IResolvable] = None,
  id: str = None,
  short_name: str = None,
  size: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DirectoryServiceDirectoryTimeouts = None,
  type: str = None,
  vpc_settings: DirectoryServiceDirectoryVpcSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#name DirectoryServiceDirectory#name}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#password DirectoryServiceDirectory#password}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.alias">alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#alias DirectoryServiceDirectory#alias}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.connectSettings">connect_settings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a></code> | connect_settings block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#description DirectoryServiceDirectory#description}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.desiredNumberOfDomainControllers">desired_number_of_domain_controllers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#desired_number_of_domain_controllers DirectoryServiceDirectory#desired_number_of_domain_controllers}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.edition">edition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#edition DirectoryServiceDirectory#edition}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.enableSso">enable_sso</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#enable_sso DirectoryServiceDirectory#enable_sso}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#id DirectoryServiceDirectory#id}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.shortName">short_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#short_name DirectoryServiceDirectory#short_name}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.size">size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#size DirectoryServiceDirectory#size}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#tags DirectoryServiceDirectory#tags}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#tags_all DirectoryServiceDirectory#tags_all}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#type DirectoryServiceDirectory#type}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.vpcSettings">vpc_settings</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a></code> | vpc_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#name DirectoryServiceDirectory#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#password DirectoryServiceDirectory#password}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#alias DirectoryServiceDirectory#alias}.

---

##### `connect_settings`<sup>Optional</sup> <a name="connect_settings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.connectSettings"></a>

```python
connect_settings: DirectoryServiceDirectoryConnectSettings
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a>

connect_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#connect_settings DirectoryServiceDirectory#connect_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#description DirectoryServiceDirectory#description}.

---

##### `desired_number_of_domain_controllers`<sup>Optional</sup> <a name="desired_number_of_domain_controllers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.desiredNumberOfDomainControllers"></a>

```python
desired_number_of_domain_controllers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#desired_number_of_domain_controllers DirectoryServiceDirectory#desired_number_of_domain_controllers}.

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.edition"></a>

```python
edition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#edition DirectoryServiceDirectory#edition}.

---

##### `enable_sso`<sup>Optional</sup> <a name="enable_sso" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.enableSso"></a>

```python
enable_sso: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#enable_sso DirectoryServiceDirectory#enable_sso}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#id DirectoryServiceDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `short_name`<sup>Optional</sup> <a name="short_name" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.shortName"></a>

```python
short_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#short_name DirectoryServiceDirectory#short_name}.

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.size"></a>

```python
size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#size DirectoryServiceDirectory#size}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#tags DirectoryServiceDirectory#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#tags_all DirectoryServiceDirectory#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.timeouts"></a>

```python
timeouts: DirectoryServiceDirectoryTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#timeouts DirectoryServiceDirectory#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#type DirectoryServiceDirectory#type}.

---

##### `vpc_settings`<sup>Optional</sup> <a name="vpc_settings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConfig.property.vpcSettings"></a>

```python
vpc_settings: DirectoryServiceDirectoryVpcSettings
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a>

vpc_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#vpc_settings DirectoryServiceDirectory#vpc_settings}

---

### DirectoryServiceDirectoryConnectSettings <a name="DirectoryServiceDirectoryConnectSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_directory

directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings(
  customer_dns_ips: typing.List[str],
  customer_username: str,
  subnet_ids: typing.List[str],
  vpc_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.customerDnsIps">customer_dns_ips</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#customer_dns_ips DirectoryServiceDirectory#customer_dns_ips}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.customerUsername">customer_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#customer_username DirectoryServiceDirectory#customer_username}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#subnet_ids DirectoryServiceDirectory#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#vpc_id DirectoryServiceDirectory#vpc_id}. |

---

##### `customer_dns_ips`<sup>Required</sup> <a name="customer_dns_ips" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.customerDnsIps"></a>

```python
customer_dns_ips: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#customer_dns_ips DirectoryServiceDirectory#customer_dns_ips}.

---

##### `customer_username`<sup>Required</sup> <a name="customer_username" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.customerUsername"></a>

```python
customer_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#customer_username DirectoryServiceDirectory#customer_username}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#subnet_ids DirectoryServiceDirectory#subnet_ids}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#vpc_id DirectoryServiceDirectory#vpc_id}.

---

### DirectoryServiceDirectoryTimeouts <a name="DirectoryServiceDirectoryTimeouts" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_directory

directoryServiceDirectory.DirectoryServiceDirectoryTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#create DirectoryServiceDirectory#create}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#delete DirectoryServiceDirectory#delete}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#update DirectoryServiceDirectory#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#create DirectoryServiceDirectory#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#delete DirectoryServiceDirectory#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#update DirectoryServiceDirectory#update}.

---

### DirectoryServiceDirectoryVpcSettings <a name="DirectoryServiceDirectoryVpcSettings" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_directory

directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings(
  subnet_ids: typing.List[str],
  vpc_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#subnet_ids DirectoryServiceDirectory#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#vpc_id DirectoryServiceDirectory#vpc_id}. |

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#subnet_ids DirectoryServiceDirectory#subnet_ids}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory#vpc_id DirectoryServiceDirectory#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryServiceDirectoryConnectSettingsOutputReference <a name="DirectoryServiceDirectoryConnectSettingsOutputReference" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_directory

directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.connectIps">connect_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerDnsIpsInput">customer_dns_ips_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerUsernameInput">customer_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerDnsIps">customer_dns_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerUsername">customer_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connect_ips`<sup>Required</sup> <a name="connect_ips" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.connectIps"></a>

```python
connect_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `customer_dns_ips_input`<sup>Optional</sup> <a name="customer_dns_ips_input" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerDnsIpsInput"></a>

```python
customer_dns_ips_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `customer_username_input`<sup>Optional</sup> <a name="customer_username_input" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerUsernameInput"></a>

```python
customer_username_input: str
```

- *Type:* str

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `customer_dns_ips`<sup>Required</sup> <a name="customer_dns_ips" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerDnsIps"></a>

```python
customer_dns_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `customer_username`<sup>Required</sup> <a name="customer_username" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.customerUsername"></a>

```python
customer_username: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DirectoryServiceDirectoryConnectSettings
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryConnectSettings">DirectoryServiceDirectoryConnectSettings</a>

---


### DirectoryServiceDirectoryTimeoutsOutputReference <a name="DirectoryServiceDirectoryTimeoutsOutputReference" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_directory

directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DirectoryServiceDirectoryTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryTimeouts">DirectoryServiceDirectoryTimeouts</a>, cdktf.IResolvable]

---


### DirectoryServiceDirectoryVpcSettingsOutputReference <a name="DirectoryServiceDirectoryVpcSettingsOutputReference" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import directory_service_directory

directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DirectoryServiceDirectoryVpcSettings
```

- *Type:* <a href="#@cdktf/provider-aws.directoryServiceDirectory.DirectoryServiceDirectoryVpcSettings">DirectoryServiceDirectoryVpcSettings</a>

---



