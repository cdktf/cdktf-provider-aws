# `dataAwsDirectoryServiceDirectory` Submodule <a name="`dataAwsDirectoryServiceDirectory` Submodule" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDirectoryServiceDirectory <a name="DataAwsDirectoryServiceDirectory" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory aws_directory_service_directory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_directory_service_directory

dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  directory_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory#directory_id DataAwsDirectoryServiceDirectory#directory_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory#id DataAwsDirectoryServiceDirectory#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory#tags DataAwsDirectoryServiceDirectory#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.directoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory#directory_id DataAwsDirectoryServiceDirectory#directory_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory#id DataAwsDirectoryServiceDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory#tags DataAwsDirectoryServiceDirectory#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_directory_service_directory

dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_directory_service_directory

dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_directory_service_directory

dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.accessUrl">access_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.connectSettings">connect_settings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList">DataAwsDirectoryServiceDirectoryConnectSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.dnsIpAddresses">dns_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.edition">edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.enableSso">enable_sso</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.radiusSettings">radius_settings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList">DataAwsDirectoryServiceDirectoryRadiusSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.shortName">short_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.size">size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.vpcSettings">vpc_settings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList">DataAwsDirectoryServiceDirectoryVpcSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.directoryIdInput">directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `access_url`<sup>Required</sup> <a name="access_url" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.accessUrl"></a>

```python
access_url: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `connect_settings`<sup>Required</sup> <a name="connect_settings" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.connectSettings"></a>

```python
connect_settings: DataAwsDirectoryServiceDirectoryConnectSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList">DataAwsDirectoryServiceDirectoryConnectSettingsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dns_ip_addresses`<sup>Required</sup> <a name="dns_ip_addresses" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.dnsIpAddresses"></a>

```python
dns_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.edition"></a>

```python
edition: str
```

- *Type:* str

---

##### `enable_sso`<sup>Required</sup> <a name="enable_sso" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.enableSso"></a>

```python
enable_sso: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `radius_settings`<sup>Required</sup> <a name="radius_settings" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.radiusSettings"></a>

```python
radius_settings: DataAwsDirectoryServiceDirectoryRadiusSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList">DataAwsDirectoryServiceDirectoryRadiusSettingsList</a>

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `short_name`<sup>Required</sup> <a name="short_name" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.shortName"></a>

```python
short_name: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.size"></a>

```python
size: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vpc_settings`<sup>Required</sup> <a name="vpc_settings" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.vpcSettings"></a>

```python
vpc_settings: DataAwsDirectoryServiceDirectoryVpcSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList">DataAwsDirectoryServiceDirectoryVpcSettingsList</a>

---

##### `directory_id_input`<sup>Optional</sup> <a name="directory_id_input" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.directoryIdInput"></a>

```python
directory_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectory.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDirectoryServiceDirectoryConfig <a name="DataAwsDirectoryServiceDirectoryConfig" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_directory_service_directory

dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  directory_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory#directory_id DataAwsDirectoryServiceDirectory#directory_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory#id DataAwsDirectoryServiceDirectory#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory#tags DataAwsDirectoryServiceDirectory#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory#directory_id DataAwsDirectoryServiceDirectory#directory_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory#id DataAwsDirectoryServiceDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/directory_service_directory#tags DataAwsDirectoryServiceDirectory#tags}.

---

### DataAwsDirectoryServiceDirectoryConnectSettings <a name="DataAwsDirectoryServiceDirectoryConnectSettings" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_directory_service_directory

dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettings()
```


### DataAwsDirectoryServiceDirectoryRadiusSettings <a name="DataAwsDirectoryServiceDirectoryRadiusSettings" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_directory_service_directory

dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettings()
```


### DataAwsDirectoryServiceDirectoryVpcSettings <a name="DataAwsDirectoryServiceDirectoryVpcSettings" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_directory_service_directory

dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettings()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsDirectoryServiceDirectoryConnectSettingsList <a name="DataAwsDirectoryServiceDirectoryConnectSettingsList" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_directory_service_directory

dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference <a name="DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_directory_service_directory

dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.connectIps">connect_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.customerDnsIps">customer_dns_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.customerUsername">customer_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettings">DataAwsDirectoryServiceDirectoryConnectSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connect_ips`<sup>Required</sup> <a name="connect_ips" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.connectIps"></a>

```python
connect_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `customer_dns_ips`<sup>Required</sup> <a name="customer_dns_ips" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.customerDnsIps"></a>

```python
customer_dns_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `customer_username`<sup>Required</sup> <a name="customer_username" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.customerUsername"></a>

```python
customer_username: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsDirectoryServiceDirectoryConnectSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryConnectSettings">DataAwsDirectoryServiceDirectoryConnectSettings</a>

---


### DataAwsDirectoryServiceDirectoryRadiusSettingsList <a name="DataAwsDirectoryServiceDirectoryRadiusSettingsList" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_directory_service_directory

dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference <a name="DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_directory_service_directory

dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.authenticationProtocol">authentication_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.displayLabel">display_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.radiusPort">radius_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.radiusRetries">radius_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.radiusServers">radius_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.radiusTimeout">radius_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.useSameUsername">use_same_username</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettings">DataAwsDirectoryServiceDirectoryRadiusSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_protocol`<sup>Required</sup> <a name="authentication_protocol" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.authenticationProtocol"></a>

```python
authentication_protocol: str
```

- *Type:* str

---

##### `display_label`<sup>Required</sup> <a name="display_label" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.displayLabel"></a>

```python
display_label: str
```

- *Type:* str

---

##### `radius_port`<sup>Required</sup> <a name="radius_port" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.radiusPort"></a>

```python
radius_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `radius_retries`<sup>Required</sup> <a name="radius_retries" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.radiusRetries"></a>

```python
radius_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `radius_servers`<sup>Required</sup> <a name="radius_servers" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.radiusServers"></a>

```python
radius_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `radius_timeout`<sup>Required</sup> <a name="radius_timeout" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.radiusTimeout"></a>

```python
radius_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `use_same_username`<sup>Required</sup> <a name="use_same_username" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.useSameUsername"></a>

```python
use_same_username: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsDirectoryServiceDirectoryRadiusSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryRadiusSettings">DataAwsDirectoryServiceDirectoryRadiusSettings</a>

---


### DataAwsDirectoryServiceDirectoryVpcSettingsList <a name="DataAwsDirectoryServiceDirectoryVpcSettingsList" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_directory_service_directory

dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference <a name="DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_directory_service_directory

dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettings">DataAwsDirectoryServiceDirectoryVpcSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsDirectoryServiceDirectoryVpcSettings
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDirectoryServiceDirectory.DataAwsDirectoryServiceDirectoryVpcSettings">DataAwsDirectoryServiceDirectoryVpcSettings</a>

---



