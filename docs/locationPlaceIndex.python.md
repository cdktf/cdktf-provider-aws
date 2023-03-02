# `locationPlaceIndex` Submodule <a name="`locationPlaceIndex` Submodule" id="@cdktf/provider-aws.locationPlaceIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LocationPlaceIndex <a name="LocationPlaceIndex" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/location_place_index aws_location_place_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import location_place_index

locationPlaceIndex.LocationPlaceIndex(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_source: str,
  index_name: str,
  data_source_configuration: LocationPlaceIndexDataSourceConfiguration = None,
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.dataSource">data_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#data_source LocationPlaceIndex#data_source}. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.indexName">index_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#index_name LocationPlaceIndex#index_name}. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.dataSourceConfiguration">data_source_configuration</a></code> | <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration">LocationPlaceIndexDataSourceConfiguration</a></code> | data_source_configuration block. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#description LocationPlaceIndex#description}. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#id LocationPlaceIndex#id}. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#tags LocationPlaceIndex#tags}. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#tags_all LocationPlaceIndex#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.dataSource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#data_source LocationPlaceIndex#data_source}.

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.indexName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#index_name LocationPlaceIndex#index_name}.

---

##### `data_source_configuration`<sup>Optional</sup> <a name="data_source_configuration" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.dataSourceConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration">LocationPlaceIndexDataSourceConfiguration</a>

data_source_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#data_source_configuration LocationPlaceIndex#data_source_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#description LocationPlaceIndex#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#id LocationPlaceIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#tags LocationPlaceIndex#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#tags_all LocationPlaceIndex#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.putDataSourceConfiguration">put_data_source_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetDataSourceConfiguration">reset_data_source_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_data_source_configuration` <a name="put_data_source_configuration" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.putDataSourceConfiguration"></a>

```python
def put_data_source_configuration(
  intended_use: str = None
) -> None
```

###### `intended_use`<sup>Optional</sup> <a name="intended_use" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.putDataSourceConfiguration.parameter.intendedUse"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#intended_use LocationPlaceIndex#intended_use}.

---

##### `reset_data_source_configuration` <a name="reset_data_source_configuration" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetDataSourceConfiguration"></a>

```python
def reset_data_source_configuration() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import location_place_index

locationPlaceIndex.LocationPlaceIndex.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import location_place_index

locationPlaceIndex.LocationPlaceIndex.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import location_place_index

locationPlaceIndex.LocationPlaceIndex.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dataSourceConfiguration">data_source_configuration</a></code> | <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference">LocationPlaceIndexDataSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.indexArn">index_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dataSourceConfigurationInput">data_source_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration">LocationPlaceIndexDataSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dataSourceInput">data_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.indexNameInput">index_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dataSource">data_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.indexName">index_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `data_source_configuration`<sup>Required</sup> <a name="data_source_configuration" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dataSourceConfiguration"></a>

```python
data_source_configuration: LocationPlaceIndexDataSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference">LocationPlaceIndexDataSourceConfigurationOutputReference</a>

---

##### `index_arn`<sup>Required</sup> <a name="index_arn" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.indexArn"></a>

```python
index_arn: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `data_source_configuration_input`<sup>Optional</sup> <a name="data_source_configuration_input" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dataSourceConfigurationInput"></a>

```python
data_source_configuration_input: LocationPlaceIndexDataSourceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration">LocationPlaceIndexDataSourceConfiguration</a>

---

##### `data_source_input`<sup>Optional</sup> <a name="data_source_input" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dataSourceInput"></a>

```python
data_source_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `index_name_input`<sup>Optional</sup> <a name="index_name_input" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.indexNameInput"></a>

```python
index_name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndex.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LocationPlaceIndexConfig <a name="LocationPlaceIndexConfig" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import location_place_index

locationPlaceIndex.LocationPlaceIndexConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_source: str,
  index_name: str,
  data_source_configuration: LocationPlaceIndexDataSourceConfiguration = None,
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.dataSource">data_source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#data_source LocationPlaceIndex#data_source}. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.indexName">index_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#index_name LocationPlaceIndex#index_name}. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.dataSourceConfiguration">data_source_configuration</a></code> | <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration">LocationPlaceIndexDataSourceConfiguration</a></code> | data_source_configuration block. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#description LocationPlaceIndex#description}. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#id LocationPlaceIndex#id}. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#tags LocationPlaceIndex#tags}. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#tags_all LocationPlaceIndex#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_source`<sup>Required</sup> <a name="data_source" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.dataSource"></a>

```python
data_source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#data_source LocationPlaceIndex#data_source}.

---

##### `index_name`<sup>Required</sup> <a name="index_name" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.indexName"></a>

```python
index_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#index_name LocationPlaceIndex#index_name}.

---

##### `data_source_configuration`<sup>Optional</sup> <a name="data_source_configuration" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.dataSourceConfiguration"></a>

```python
data_source_configuration: LocationPlaceIndexDataSourceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration">LocationPlaceIndexDataSourceConfiguration</a>

data_source_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#data_source_configuration LocationPlaceIndex#data_source_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#description LocationPlaceIndex#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#id LocationPlaceIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#tags LocationPlaceIndex#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#tags_all LocationPlaceIndex#tags_all}.

---

### LocationPlaceIndexDataSourceConfiguration <a name="LocationPlaceIndexDataSourceConfiguration" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import location_place_index

locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration(
  intended_use: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration.property.intendedUse">intended_use</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#intended_use LocationPlaceIndex#intended_use}. |

---

##### `intended_use`<sup>Optional</sup> <a name="intended_use" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration.property.intendedUse"></a>

```python
intended_use: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/location_place_index#intended_use LocationPlaceIndex#intended_use}.

---

## Classes <a name="Classes" id="Classes"></a>

### LocationPlaceIndexDataSourceConfigurationOutputReference <a name="LocationPlaceIndexDataSourceConfigurationOutputReference" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import location_place_index

locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.resetIntendedUse">reset_intended_use</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_intended_use` <a name="reset_intended_use" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.resetIntendedUse"></a>

```python
def reset_intended_use() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.intendedUseInput">intended_use_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.intendedUse">intended_use</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration">LocationPlaceIndexDataSourceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `intended_use_input`<sup>Optional</sup> <a name="intended_use_input" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.intendedUseInput"></a>

```python
intended_use_input: str
```

- *Type:* str

---

##### `intended_use`<sup>Required</sup> <a name="intended_use" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.intendedUse"></a>

```python
intended_use: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: LocationPlaceIndexDataSourceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.locationPlaceIndex.LocationPlaceIndexDataSourceConfiguration">LocationPlaceIndexDataSourceConfiguration</a>

---



