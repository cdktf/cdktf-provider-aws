# `dataAwsLakeformationDataLakeSettings` Submodule <a name="`dataAwsLakeformationDataLakeSettings` Submodule" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLakeformationDataLakeSettings <a name="DataAwsLakeformationDataLakeSettings" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings aws_lakeformation_data_lake_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lakeformation_data_lake_settings

dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  catalog_id: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings#catalog_id DataAwsLakeformationDataLakeSettings#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings#id DataAwsLakeformationDataLakeSettings#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.catalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings#catalog_id DataAwsLakeformationDataLakeSettings#catalog_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings#id DataAwsLakeformationDataLakeSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.resetCatalogId">reset_catalog_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_catalog_id` <a name="reset_catalog_id" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.resetCatalogId"></a>

```python
def reset_catalog_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lakeformation_data_lake_settings

dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lakeformation_data_lake_settings

dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lakeformation_data_lake_settings

dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.admins">admins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.createDatabaseDefaultPermissions">create_database_default_permissions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList">DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.createTableDefaultPermissions">create_table_default_permissions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList">DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.trustedResourceOwners">trusted_resource_owners</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.catalogIdInput">catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `admins`<sup>Required</sup> <a name="admins" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.admins"></a>

```python
admins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `create_database_default_permissions`<sup>Required</sup> <a name="create_database_default_permissions" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.createDatabaseDefaultPermissions"></a>

```python
create_database_default_permissions: DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList">DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList</a>

---

##### `create_table_default_permissions`<sup>Required</sup> <a name="create_table_default_permissions" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.createTableDefaultPermissions"></a>

```python
create_table_default_permissions: DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList">DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList</a>

---

##### `trusted_resource_owners`<sup>Required</sup> <a name="trusted_resource_owners" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.trustedResourceOwners"></a>

```python
trusted_resource_owners: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `catalog_id_input`<sup>Optional</sup> <a name="catalog_id_input" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.catalogIdInput"></a>

```python
catalog_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLakeformationDataLakeSettingsConfig <a name="DataAwsLakeformationDataLakeSettingsConfig" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lakeformation_data_lake_settings

dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  catalog_id: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.catalogId">catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings#catalog_id DataAwsLakeformationDataLakeSettings#catalog_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings#id DataAwsLakeformationDataLakeSettings#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `catalog_id`<sup>Optional</sup> <a name="catalog_id" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings#catalog_id DataAwsLakeformationDataLakeSettings#catalog_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings#id DataAwsLakeformationDataLakeSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions <a name="DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lakeformation_data_lake_settings

dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions()
```


### DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions <a name="DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lakeformation_data_lake_settings

dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList <a name="DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lakeformation_data_lake_settings

dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference <a name="DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lakeformation_data_lake_settings

dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions">DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions</a>

---


### DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList <a name="DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lakeformation_data_lake_settings

dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference <a name="DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_lakeformation_data_lake_settings

dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions">DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsLakeformationDataLakeSettings.DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions">DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions</a>

---



