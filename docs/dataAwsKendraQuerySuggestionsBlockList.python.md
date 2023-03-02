# `dataAwsKendraQuerySuggestionsBlockList` Submodule <a name="`dataAwsKendraQuerySuggestionsBlockList` Submodule" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsKendraQuerySuggestionsBlockList <a name="DataAwsKendraQuerySuggestionsBlockList" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list aws_kendra_query_suggestions_block_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_query_suggestions_block_list

dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  index_id: str,
  query_suggestions_block_list_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.indexId">index_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#index_id DataAwsKendraQuerySuggestionsBlockList#index_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.querySuggestionsBlockListId">query_suggestions_block_list_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#query_suggestions_block_list_id DataAwsKendraQuerySuggestionsBlockList#query_suggestions_block_list_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#id DataAwsKendraQuerySuggestionsBlockList#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#tags DataAwsKendraQuerySuggestionsBlockList#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.indexId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#index_id DataAwsKendraQuerySuggestionsBlockList#index_id}.

---

##### `query_suggestions_block_list_id`<sup>Required</sup> <a name="query_suggestions_block_list_id" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.querySuggestionsBlockListId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#query_suggestions_block_list_id DataAwsKendraQuerySuggestionsBlockList#query_suggestions_block_list_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#id DataAwsKendraQuerySuggestionsBlockList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#tags DataAwsKendraQuerySuggestionsBlockList#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_query_suggestions_block_list

dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_query_suggestions_block_list

dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_query_suggestions_block_list

dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.fileSizeBytes">file_size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.itemCount">item_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.sourceS3Path">source_s3_path</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList">DataAwsKendraQuerySuggestionsBlockListSourceS3PathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.indexIdInput">index_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.querySuggestionsBlockListIdInput">query_suggestions_block_list_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.indexId">index_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.querySuggestionsBlockListId">query_suggestions_block_list_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `file_size_bytes`<sup>Required</sup> <a name="file_size_bytes" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.fileSizeBytes"></a>

```python
file_size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `item_count`<sup>Required</sup> <a name="item_count" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.itemCount"></a>

```python
item_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `source_s3_path`<sup>Required</sup> <a name="source_s3_path" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.sourceS3Path"></a>

```python
source_s3_path: DataAwsKendraQuerySuggestionsBlockListSourceS3PathList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList">DataAwsKendraQuerySuggestionsBlockListSourceS3PathList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `index_id_input`<sup>Optional</sup> <a name="index_id_input" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.indexIdInput"></a>

```python
index_id_input: str
```

- *Type:* str

---

##### `query_suggestions_block_list_id_input`<sup>Optional</sup> <a name="query_suggestions_block_list_id_input" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.querySuggestionsBlockListIdInput"></a>

```python
query_suggestions_block_list_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.indexId"></a>

```python
index_id: str
```

- *Type:* str

---

##### `query_suggestions_block_list_id`<sup>Required</sup> <a name="query_suggestions_block_list_id" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.querySuggestionsBlockListId"></a>

```python
query_suggestions_block_list_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockList.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsKendraQuerySuggestionsBlockListConfig <a name="DataAwsKendraQuerySuggestionsBlockListConfig" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_query_suggestions_block_list

dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  index_id: str,
  query_suggestions_block_list_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.indexId">index_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#index_id DataAwsKendraQuerySuggestionsBlockList#index_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.querySuggestionsBlockListId">query_suggestions_block_list_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#query_suggestions_block_list_id DataAwsKendraQuerySuggestionsBlockList#query_suggestions_block_list_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#id DataAwsKendraQuerySuggestionsBlockList#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#tags DataAwsKendraQuerySuggestionsBlockList#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.indexId"></a>

```python
index_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#index_id DataAwsKendraQuerySuggestionsBlockList#index_id}.

---

##### `query_suggestions_block_list_id`<sup>Required</sup> <a name="query_suggestions_block_list_id" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.querySuggestionsBlockListId"></a>

```python
query_suggestions_block_list_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#query_suggestions_block_list_id DataAwsKendraQuerySuggestionsBlockList#query_suggestions_block_list_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#id DataAwsKendraQuerySuggestionsBlockList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kendra_query_suggestions_block_list#tags DataAwsKendraQuerySuggestionsBlockList#tags}.

---

### DataAwsKendraQuerySuggestionsBlockListSourceS3Path <a name="DataAwsKendraQuerySuggestionsBlockListSourceS3Path" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3Path"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3Path.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_query_suggestions_block_list

dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3Path()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsKendraQuerySuggestionsBlockListSourceS3PathList <a name="DataAwsKendraQuerySuggestionsBlockListSourceS3PathList" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_query_suggestions_block_list

dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference <a name="DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kendra_query_suggestions_block_list

dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3Path">DataAwsKendraQuerySuggestionsBlockListSourceS3Path</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsKendraQuerySuggestionsBlockListSourceS3Path
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsKendraQuerySuggestionsBlockList.DataAwsKendraQuerySuggestionsBlockListSourceS3Path">DataAwsKendraQuerySuggestionsBlockListSourceS3Path</a>

---



