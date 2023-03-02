# `dataAwsCeTags` Submodule <a name="`dataAwsCeTags` Submodule" id="@cdktf/provider-aws.dataAwsCeTags"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCeTags <a name="DataAwsCeTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ce_tags aws_ce_tags}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTags(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  time_period: DataAwsCeTagsTimePeriod,
  filter: DataAwsCeTagsFilter = None,
  id: str = None,
  search_string: str = None,
  sort_by: typing.Union[IResolvable, typing.List[DataAwsCeTagsSortBy]] = None,
  tag_key: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.timePeriod">time_period</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a></code> | time_period block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#id DataAwsCeTags#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.searchString">search_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#search_string DataAwsCeTags#search_string}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.sortBy">sort_by</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>]]</code> | sort_by block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.tagKey">tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tag_key DataAwsCeTags#tag_key}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `time_period`<sup>Required</sup> <a name="time_period" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.timePeriod"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a>

time_period block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#time_period DataAwsCeTags#time_period}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#filter DataAwsCeTags#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#id DataAwsCeTags#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `search_string`<sup>Optional</sup> <a name="search_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.searchString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#search_string DataAwsCeTags#search_string}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.sortBy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>]]

sort_by block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#sort_by DataAwsCeTags#sort_by}

---

##### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.Initializer.parameter.tagKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tag_key DataAwsCeTags#tag_key}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putSortBy">put_sort_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putTimePeriod">put_time_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetSearchString">reset_search_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetSortBy">reset_sort_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetTagKey">reset_tag_key</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putFilter"></a>

```python
def put_filter(
  and: typing.Union[IResolvable, typing.List[DataAwsCeTagsFilterAnd]] = None,
  cost_category: DataAwsCeTagsFilterCostCategory = None,
  dimension: DataAwsCeTagsFilterDimension = None,
  not: DataAwsCeTagsFilterNot = None,
  or: typing.Union[IResolvable, typing.List[DataAwsCeTagsFilterOr]] = None,
  tags: DataAwsCeTagsFilterTags = None
) -> None
```

###### `and`<sup>Optional</sup> <a name="and" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putFilter.parameter.and"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>]]

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#and DataAwsCeTags#and}

---

###### `cost_category`<sup>Optional</sup> <a name="cost_category" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putFilter.parameter.costCategory"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#cost_category DataAwsCeTags#cost_category}

---

###### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putFilter.parameter.dimension"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#dimension DataAwsCeTags#dimension}

---

###### `not`<sup>Optional</sup> <a name="not" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putFilter.parameter.not"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a>

not block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#not DataAwsCeTags#not}

---

###### `or`<sup>Optional</sup> <a name="or" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putFilter.parameter.or"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>]]

or block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#or DataAwsCeTags#or}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putFilter.parameter.tags"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tags DataAwsCeTags#tags}

---

##### `put_sort_by` <a name="put_sort_by" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putSortBy"></a>

```python
def put_sort_by(
  value: typing.Union[IResolvable, typing.List[DataAwsCeTagsSortBy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putSortBy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>]]

---

##### `put_time_period` <a name="put_time_period" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putTimePeriod"></a>

```python
def put_time_period(
  end: str,
  start: str
) -> None
```

###### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putTimePeriod.parameter.end"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#end DataAwsCeTags#end}.

---

###### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.putTimePeriod.parameter.start"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#start DataAwsCeTags#start}.

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_search_string` <a name="reset_search_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetSearchString"></a>

```python
def reset_search_string() -> None
```

##### `reset_sort_by` <a name="reset_sort_by" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetSortBy"></a>

```python
def reset_sort_by() -> None
```

##### `reset_tag_key` <a name="reset_tag_key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.resetTagKey"></a>

```python
def reset_tag_key() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTags.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTags.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTags.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference">DataAwsCeTagsFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.sortBy">sort_by</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList">DataAwsCeTagsSortByList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.timePeriod">time_period</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference">DataAwsCeTagsTimePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.filterInput">filter_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.searchStringInput">search_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.sortByInput">sort_by_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.timePeriodInput">time_period_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.searchString">search_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.filter"></a>

```python
filter: DataAwsCeTagsFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference">DataAwsCeTagsFilterOutputReference</a>

---

##### `sort_by`<sup>Required</sup> <a name="sort_by" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.sortBy"></a>

```python
sort_by: DataAwsCeTagsSortByList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList">DataAwsCeTagsSortByList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_period`<sup>Required</sup> <a name="time_period" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.timePeriod"></a>

```python
time_period: DataAwsCeTagsTimePeriodOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference">DataAwsCeTagsTimePeriodOutputReference</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.filterInput"></a>

```python
filter_input: DataAwsCeTagsFilter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `search_string_input`<sup>Optional</sup> <a name="search_string_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.searchStringInput"></a>

```python
search_string_input: str
```

- *Type:* str

---

##### `sort_by_input`<sup>Optional</sup> <a name="sort_by_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.sortByInput"></a>

```python
sort_by_input: typing.Union[IResolvable, typing.List[DataAwsCeTagsSortBy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>]]

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `time_period_input`<sup>Optional</sup> <a name="time_period_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.timePeriodInput"></a>

```python
time_period_input: DataAwsCeTagsTimePeriod
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `search_string`<sup>Required</sup> <a name="search_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.searchString"></a>

```python
search_string: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTags.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCeTagsConfig <a name="DataAwsCeTagsConfig" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  time_period: DataAwsCeTagsTimePeriod,
  filter: DataAwsCeTagsFilter = None,
  id: str = None,
  search_string: str = None,
  sort_by: typing.Union[IResolvable, typing.List[DataAwsCeTagsSortBy]] = None,
  tag_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.timePeriod">time_period</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a></code> | time_period block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#id DataAwsCeTags#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.searchString">search_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#search_string DataAwsCeTags#search_string}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.sortBy">sort_by</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>]]</code> | sort_by block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.tagKey">tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tag_key DataAwsCeTags#tag_key}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `time_period`<sup>Required</sup> <a name="time_period" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.timePeriod"></a>

```python
time_period: DataAwsCeTagsTimePeriod
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a>

time_period block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#time_period DataAwsCeTags#time_period}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.filter"></a>

```python
filter: DataAwsCeTagsFilter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#filter DataAwsCeTags#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#id DataAwsCeTags#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `search_string`<sup>Optional</sup> <a name="search_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.searchString"></a>

```python
search_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#search_string DataAwsCeTags#search_string}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.sortBy"></a>

```python
sort_by: typing.Union[IResolvable, typing.List[DataAwsCeTagsSortBy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>]]

sort_by block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#sort_by DataAwsCeTags#sort_by}

---

##### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsConfig.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tag_key DataAwsCeTags#tag_key}.

---

### DataAwsCeTagsFilter <a name="DataAwsCeTagsFilter" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilter(
  and: typing.Union[IResolvable, typing.List[DataAwsCeTagsFilterAnd]] = None,
  cost_category: DataAwsCeTagsFilterCostCategory = None,
  dimension: DataAwsCeTagsFilterDimension = None,
  not: DataAwsCeTagsFilterNot = None,
  or: typing.Union[IResolvable, typing.List[DataAwsCeTagsFilterOr]] = None,
  tags: DataAwsCeTagsFilterTags = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.and">and</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>]]</code> | and block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.not">not</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a></code> | not block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.or">or</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>]]</code> | or block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a></code> | tags block. |

---

##### `and`<sup>Optional</sup> <a name="and" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.and"></a>

```python
and: typing.Union[IResolvable, typing.List[DataAwsCeTagsFilterAnd]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>]]

and block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#and DataAwsCeTags#and}

---

##### `cost_category`<sup>Optional</sup> <a name="cost_category" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.costCategory"></a>

```python
cost_category: DataAwsCeTagsFilterCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#cost_category DataAwsCeTags#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.dimension"></a>

```python
dimension: DataAwsCeTagsFilterDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#dimension DataAwsCeTags#dimension}

---

##### `not`<sup>Optional</sup> <a name="not" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.not"></a>

```python
not: DataAwsCeTagsFilterNot
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a>

not block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#not DataAwsCeTags#not}

---

##### `or`<sup>Optional</sup> <a name="or" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.or"></a>

```python
or: typing.Union[IResolvable, typing.List[DataAwsCeTagsFilterOr]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>]]

or block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#or DataAwsCeTags#or}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter.property.tags"></a>

```python
tags: DataAwsCeTagsFilterTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tags DataAwsCeTags#tags}

---

### DataAwsCeTagsFilterAnd <a name="DataAwsCeTagsFilterAnd" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterAnd(
  cost_category: DataAwsCeTagsFilterAndCostCategory = None,
  dimension: DataAwsCeTagsFilterAndDimension = None,
  tags: DataAwsCeTagsFilterAndTags = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a></code> | tags block. |

---

##### `cost_category`<sup>Optional</sup> <a name="cost_category" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.costCategory"></a>

```python
cost_category: DataAwsCeTagsFilterAndCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#cost_category DataAwsCeTags#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.dimension"></a>

```python
dimension: DataAwsCeTagsFilterAndDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#dimension DataAwsCeTags#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd.property.tags"></a>

```python
tags: DataAwsCeTagsFilterAndTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tags DataAwsCeTags#tags}

---

### DataAwsCeTagsFilterAndCostCategory <a name="DataAwsCeTagsFilterAndCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterAndDimension <a name="DataAwsCeTagsFilterAndDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterAndDimension(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterAndTags <a name="DataAwsCeTagsFilterAndTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterAndTags(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterCostCategory <a name="DataAwsCeTagsFilterCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterCostCategory(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterDimension <a name="DataAwsCeTagsFilterDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterDimension(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterNot <a name="DataAwsCeTagsFilterNot" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterNot(
  cost_category: DataAwsCeTagsFilterNotCostCategory = None,
  dimension: DataAwsCeTagsFilterNotDimension = None,
  tags: DataAwsCeTagsFilterNotTags = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a></code> | tags block. |

---

##### `cost_category`<sup>Optional</sup> <a name="cost_category" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.costCategory"></a>

```python
cost_category: DataAwsCeTagsFilterNotCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#cost_category DataAwsCeTags#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.dimension"></a>

```python
dimension: DataAwsCeTagsFilterNotDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#dimension DataAwsCeTags#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot.property.tags"></a>

```python
tags: DataAwsCeTagsFilterNotTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tags DataAwsCeTags#tags}

---

### DataAwsCeTagsFilterNotCostCategory <a name="DataAwsCeTagsFilterNotCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterNotDimension <a name="DataAwsCeTagsFilterNotDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterNotDimension(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterNotTags <a name="DataAwsCeTagsFilterNotTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterNotTags(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterOr <a name="DataAwsCeTagsFilterOr" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterOr(
  cost_category: DataAwsCeTagsFilterOrCostCategory = None,
  dimension: DataAwsCeTagsFilterOrDimension = None,
  tags: DataAwsCeTagsFilterOrTags = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a></code> | cost_category block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a></code> | dimension block. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a></code> | tags block. |

---

##### `cost_category`<sup>Optional</sup> <a name="cost_category" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.costCategory"></a>

```python
cost_category: DataAwsCeTagsFilterOrCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#cost_category DataAwsCeTags#cost_category}

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.dimension"></a>

```python
dimension: DataAwsCeTagsFilterOrDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#dimension DataAwsCeTags#dimension}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr.property.tags"></a>

```python
tags: DataAwsCeTagsFilterOrTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tags DataAwsCeTags#tags}

---

### DataAwsCeTagsFilterOrCostCategory <a name="DataAwsCeTagsFilterOrCostCategory" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterOrDimension <a name="DataAwsCeTagsFilterOrDimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterOrDimension(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterOrTags <a name="DataAwsCeTagsFilterOrTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterOrTags(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsFilterTags <a name="DataAwsCeTagsFilterTags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterTags(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

### DataAwsCeTagsSortBy <a name="DataAwsCeTagsSortBy" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsSortBy(
  key: str = None,
  sort_order: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy.property.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#sort_order DataAwsCeTags#sort_order}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#sort_order DataAwsCeTags#sort_order}.

---

### DataAwsCeTagsTimePeriod <a name="DataAwsCeTagsTimePeriod" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsTimePeriod(
  end: str,
  start: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod.property.end">end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#end DataAwsCeTags#end}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod.property.start">start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#start DataAwsCeTags#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod.property.end"></a>

```python
end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#end DataAwsCeTags#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod.property.start"></a>

```python
start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#start DataAwsCeTags#start}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsCeTagsFilterAndCostCategoryOutputReference <a name="DataAwsCeTagsFilterAndCostCategoryOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeTagsFilterAndCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a>

---


### DataAwsCeTagsFilterAndDimensionOutputReference <a name="DataAwsCeTagsFilterAndDimensionOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeTagsFilterAndDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a>

---


### DataAwsCeTagsFilterAndList <a name="DataAwsCeTagsFilterAndList" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterAndList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCeTagsFilterAndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsCeTagsFilterAnd]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>]]

---


### DataAwsCeTagsFilterAndOutputReference <a name="DataAwsCeTagsFilterAndOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putCostCategory">put_cost_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putDimension">put_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetCostCategory">reset_cost_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetDimension">reset_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cost_category` <a name="put_cost_category" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putCostCategory"></a>

```python
def put_cost_category(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putCostCategory.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putCostCategory.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putCostCategory.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

##### `put_dimension` <a name="put_dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putDimension"></a>

```python
def put_dimension(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putDimension.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putDimension.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putDimension.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putTags"></a>

```python
def put_tags(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putTags.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putTags.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.putTags.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

##### `reset_cost_category` <a name="reset_cost_category" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetCostCategory"></a>

```python
def reset_cost_category() -> None
```

##### `reset_dimension` <a name="reset_dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetDimension"></a>

```python
def reset_dimension() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference">DataAwsCeTagsFilterAndCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference">DataAwsCeTagsFilterAndDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference">DataAwsCeTagsFilterAndTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.costCategoryInput">cost_category_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.dimensionInput">dimension_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.tagsInput">tags_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cost_category`<sup>Required</sup> <a name="cost_category" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.costCategory"></a>

```python
cost_category: DataAwsCeTagsFilterAndCostCategoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategoryOutputReference">DataAwsCeTagsFilterAndCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.dimension"></a>

```python
dimension: DataAwsCeTagsFilterAndDimensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimensionOutputReference">DataAwsCeTagsFilterAndDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.tags"></a>

```python
tags: DataAwsCeTagsFilterAndTagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference">DataAwsCeTagsFilterAndTagsOutputReference</a>

---

##### `cost_category_input`<sup>Optional</sup> <a name="cost_category_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.costCategoryInput"></a>

```python
cost_category_input: DataAwsCeTagsFilterAndCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndCostCategory">DataAwsCeTagsFilterAndCostCategory</a>

---

##### `dimension_input`<sup>Optional</sup> <a name="dimension_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.dimensionInput"></a>

```python
dimension_input: DataAwsCeTagsFilterAndDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndDimension">DataAwsCeTagsFilterAndDimension</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.tagsInput"></a>

```python
tags_input: DataAwsCeTagsFilterAndTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsCeTagsFilterAnd, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>, cdktf.IResolvable]

---


### DataAwsCeTagsFilterAndTagsOutputReference <a name="DataAwsCeTagsFilterAndTagsOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeTagsFilterAndTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndTags">DataAwsCeTagsFilterAndTags</a>

---


### DataAwsCeTagsFilterCostCategoryOutputReference <a name="DataAwsCeTagsFilterCostCategoryOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeTagsFilterCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a>

---


### DataAwsCeTagsFilterDimensionOutputReference <a name="DataAwsCeTagsFilterDimensionOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeTagsFilterDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a>

---


### DataAwsCeTagsFilterNotCostCategoryOutputReference <a name="DataAwsCeTagsFilterNotCostCategoryOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeTagsFilterNotCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a>

---


### DataAwsCeTagsFilterNotDimensionOutputReference <a name="DataAwsCeTagsFilterNotDimensionOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeTagsFilterNotDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a>

---


### DataAwsCeTagsFilterNotOutputReference <a name="DataAwsCeTagsFilterNotOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putCostCategory">put_cost_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putDimension">put_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetCostCategory">reset_cost_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetDimension">reset_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cost_category` <a name="put_cost_category" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putCostCategory"></a>

```python
def put_cost_category(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putCostCategory.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putCostCategory.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putCostCategory.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

##### `put_dimension` <a name="put_dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putDimension"></a>

```python
def put_dimension(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putDimension.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putDimension.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putDimension.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putTags"></a>

```python
def put_tags(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putTags.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putTags.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.putTags.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

##### `reset_cost_category` <a name="reset_cost_category" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetCostCategory"></a>

```python
def reset_cost_category() -> None
```

##### `reset_dimension` <a name="reset_dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetDimension"></a>

```python
def reset_dimension() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference">DataAwsCeTagsFilterNotCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference">DataAwsCeTagsFilterNotDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference">DataAwsCeTagsFilterNotTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.costCategoryInput">cost_category_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.dimensionInput">dimension_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.tagsInput">tags_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cost_category`<sup>Required</sup> <a name="cost_category" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.costCategory"></a>

```python
cost_category: DataAwsCeTagsFilterNotCostCategoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategoryOutputReference">DataAwsCeTagsFilterNotCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.dimension"></a>

```python
dimension: DataAwsCeTagsFilterNotDimensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimensionOutputReference">DataAwsCeTagsFilterNotDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.tags"></a>

```python
tags: DataAwsCeTagsFilterNotTagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference">DataAwsCeTagsFilterNotTagsOutputReference</a>

---

##### `cost_category_input`<sup>Optional</sup> <a name="cost_category_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.costCategoryInput"></a>

```python
cost_category_input: DataAwsCeTagsFilterNotCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a>

---

##### `dimension_input`<sup>Optional</sup> <a name="dimension_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.dimensionInput"></a>

```python
dimension_input: DataAwsCeTagsFilterNotDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.tagsInput"></a>

```python
tags_input: DataAwsCeTagsFilterNotTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeTagsFilterNot
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a>

---


### DataAwsCeTagsFilterNotTagsOutputReference <a name="DataAwsCeTagsFilterNotTagsOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeTagsFilterNotTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a>

---


### DataAwsCeTagsFilterOrCostCategoryOutputReference <a name="DataAwsCeTagsFilterOrCostCategoryOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeTagsFilterOrCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a>

---


### DataAwsCeTagsFilterOrDimensionOutputReference <a name="DataAwsCeTagsFilterOrDimensionOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeTagsFilterOrDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a>

---


### DataAwsCeTagsFilterOrList <a name="DataAwsCeTagsFilterOrList" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterOrList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCeTagsFilterOrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsCeTagsFilterOr]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>]]

---


### DataAwsCeTagsFilterOrOutputReference <a name="DataAwsCeTagsFilterOrOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putCostCategory">put_cost_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putDimension">put_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetCostCategory">reset_cost_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetDimension">reset_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cost_category` <a name="put_cost_category" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putCostCategory"></a>

```python
def put_cost_category(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putCostCategory.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putCostCategory.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putCostCategory.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

##### `put_dimension` <a name="put_dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putDimension"></a>

```python
def put_dimension(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putDimension.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putDimension.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putDimension.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putTags"></a>

```python
def put_tags(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putTags.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putTags.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.putTags.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

##### `reset_cost_category` <a name="reset_cost_category" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetCostCategory"></a>

```python
def reset_cost_category() -> None
```

##### `reset_dimension` <a name="reset_dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetDimension"></a>

```python
def reset_dimension() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference">DataAwsCeTagsFilterOrCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference">DataAwsCeTagsFilterOrDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference">DataAwsCeTagsFilterOrTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.costCategoryInput">cost_category_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.dimensionInput">dimension_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.tagsInput">tags_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cost_category`<sup>Required</sup> <a name="cost_category" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.costCategory"></a>

```python
cost_category: DataAwsCeTagsFilterOrCostCategoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategoryOutputReference">DataAwsCeTagsFilterOrCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.dimension"></a>

```python
dimension: DataAwsCeTagsFilterOrDimensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimensionOutputReference">DataAwsCeTagsFilterOrDimensionOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.tags"></a>

```python
tags: DataAwsCeTagsFilterOrTagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference">DataAwsCeTagsFilterOrTagsOutputReference</a>

---

##### `cost_category_input`<sup>Optional</sup> <a name="cost_category_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.costCategoryInput"></a>

```python
cost_category_input: DataAwsCeTagsFilterOrCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrCostCategory">DataAwsCeTagsFilterOrCostCategory</a>

---

##### `dimension_input`<sup>Optional</sup> <a name="dimension_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.dimensionInput"></a>

```python
dimension_input: DataAwsCeTagsFilterOrDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrDimension">DataAwsCeTagsFilterOrDimension</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.tagsInput"></a>

```python
tags_input: DataAwsCeTagsFilterOrTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsCeTagsFilterOr, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>, cdktf.IResolvable]

---


### DataAwsCeTagsFilterOrTagsOutputReference <a name="DataAwsCeTagsFilterOrTagsOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeTagsFilterOrTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrTags">DataAwsCeTagsFilterOrTags</a>

---


### DataAwsCeTagsFilterOutputReference <a name="DataAwsCeTagsFilterOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putAnd">put_and</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putCostCategory">put_cost_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putDimension">put_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putNot">put_not</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putOr">put_or</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetAnd">reset_and</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetCostCategory">reset_cost_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetDimension">reset_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetNot">reset_not</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetOr">reset_or</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_and` <a name="put_and" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putAnd"></a>

```python
def put_and(
  value: typing.Union[IResolvable, typing.List[DataAwsCeTagsFilterAnd]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putAnd.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>]]

---

##### `put_cost_category` <a name="put_cost_category" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putCostCategory"></a>

```python
def put_cost_category(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putCostCategory.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putCostCategory.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putCostCategory.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

##### `put_dimension` <a name="put_dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putDimension"></a>

```python
def put_dimension(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putDimension.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putDimension.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putDimension.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

##### `put_not` <a name="put_not" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putNot"></a>

```python
def put_not(
  cost_category: DataAwsCeTagsFilterNotCostCategory = None,
  dimension: DataAwsCeTagsFilterNotDimension = None,
  tags: DataAwsCeTagsFilterNotTags = None
) -> None
```

###### `cost_category`<sup>Optional</sup> <a name="cost_category" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putNot.parameter.costCategory"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotCostCategory">DataAwsCeTagsFilterNotCostCategory</a>

cost_category block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#cost_category DataAwsCeTags#cost_category}

---

###### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putNot.parameter.dimension"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotDimension">DataAwsCeTagsFilterNotDimension</a>

dimension block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#dimension DataAwsCeTags#dimension}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putNot.parameter.tags"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotTags">DataAwsCeTagsFilterNotTags</a>

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#tags DataAwsCeTags#tags}

---

##### `put_or` <a name="put_or" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putOr"></a>

```python
def put_or(
  value: typing.Union[IResolvable, typing.List[DataAwsCeTagsFilterOr]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putOr.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>]]

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putTags"></a>

```python
def put_tags(
  key: str = None,
  match_options: typing.List[str] = None,
  values: typing.List[str] = None
) -> None
```

###### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putTags.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#key DataAwsCeTags#key}.

---

###### `match_options`<sup>Optional</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putTags.parameter.matchOptions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#match_options DataAwsCeTags#match_options}.

---

###### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.putTags.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ce_tags#values DataAwsCeTags#values}.

---

##### `reset_and` <a name="reset_and" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetAnd"></a>

```python
def reset_and() -> None
```

##### `reset_cost_category` <a name="reset_cost_category" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetCostCategory"></a>

```python
def reset_cost_category() -> None
```

##### `reset_dimension` <a name="reset_dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetDimension"></a>

```python
def reset_dimension() -> None
```

##### `reset_not` <a name="reset_not" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetNot"></a>

```python
def reset_not() -> None
```

##### `reset_or` <a name="reset_or" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetOr"></a>

```python
def reset_or() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.and">and</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList">DataAwsCeTagsFilterAndList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.costCategory">cost_category</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference">DataAwsCeTagsFilterCostCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference">DataAwsCeTagsFilterDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.not">not</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference">DataAwsCeTagsFilterNotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.or">or</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList">DataAwsCeTagsFilterOrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference">DataAwsCeTagsFilterTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.andInput">and_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.costCategoryInput">cost_category_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.dimensionInput">dimension_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.notInput">not_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.orInput">or_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.tagsInput">tags_input</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.and"></a>

```python
and: DataAwsCeTagsFilterAndList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAndList">DataAwsCeTagsFilterAndList</a>

---

##### `cost_category`<sup>Required</sup> <a name="cost_category" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.costCategory"></a>

```python
cost_category: DataAwsCeTagsFilterCostCategoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategoryOutputReference">DataAwsCeTagsFilterCostCategoryOutputReference</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.dimension"></a>

```python
dimension: DataAwsCeTagsFilterDimensionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimensionOutputReference">DataAwsCeTagsFilterDimensionOutputReference</a>

---

##### `not`<sup>Required</sup> <a name="not" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.not"></a>

```python
not: DataAwsCeTagsFilterNotOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNotOutputReference">DataAwsCeTagsFilterNotOutputReference</a>

---

##### `or`<sup>Required</sup> <a name="or" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.or"></a>

```python
or: DataAwsCeTagsFilterOrList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOrList">DataAwsCeTagsFilterOrList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.tags"></a>

```python
tags: DataAwsCeTagsFilterTagsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference">DataAwsCeTagsFilterTagsOutputReference</a>

---

##### `and_input`<sup>Optional</sup> <a name="and_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.andInput"></a>

```python
and_input: typing.Union[IResolvable, typing.List[DataAwsCeTagsFilterAnd]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterAnd">DataAwsCeTagsFilterAnd</a>]]

---

##### `cost_category_input`<sup>Optional</sup> <a name="cost_category_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.costCategoryInput"></a>

```python
cost_category_input: DataAwsCeTagsFilterCostCategory
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterCostCategory">DataAwsCeTagsFilterCostCategory</a>

---

##### `dimension_input`<sup>Optional</sup> <a name="dimension_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.dimensionInput"></a>

```python
dimension_input: DataAwsCeTagsFilterDimension
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterDimension">DataAwsCeTagsFilterDimension</a>

---

##### `not_input`<sup>Optional</sup> <a name="not_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.notInput"></a>

```python
not_input: DataAwsCeTagsFilterNot
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterNot">DataAwsCeTagsFilterNot</a>

---

##### `or_input`<sup>Optional</sup> <a name="or_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.orInput"></a>

```python
or_input: typing.Union[IResolvable, typing.List[DataAwsCeTagsFilterOr]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOr">DataAwsCeTagsFilterOr</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.tagsInput"></a>

```python
tags_input: DataAwsCeTagsFilterTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeTagsFilter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilter">DataAwsCeTagsFilter</a>

---


### DataAwsCeTagsFilterTagsOutputReference <a name="DataAwsCeTagsFilterTagsOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetMatchOptions">reset_match_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_match_options` <a name="reset_match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetMatchOptions"></a>

```python
def reset_match_options() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.matchOptionsInput">match_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.matchOptions">match_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `match_options_input`<sup>Optional</sup> <a name="match_options_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.matchOptionsInput"></a>

```python
match_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `match_options`<sup>Required</sup> <a name="match_options" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.matchOptions"></a>

```python
match_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeTagsFilterTags
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsFilterTags">DataAwsCeTagsFilterTags</a>

---


### DataAwsCeTagsSortByList <a name="DataAwsCeTagsSortByList" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsSortByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCeTagsSortByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsCeTagsSortBy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>]]

---


### DataAwsCeTagsSortByOutputReference <a name="DataAwsCeTagsSortByOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsSortByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resetSortOrder">reset_sort_order</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_sort_order` <a name="reset_sort_order" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.resetSortOrder"></a>

```python
def reset_sort_order() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.sortOrderInput">sort_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.sortOrder">sort_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `sort_order_input`<sup>Optional</sup> <a name="sort_order_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.sortOrderInput"></a>

```python
sort_order_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortByOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsCeTagsSortBy, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsSortBy">DataAwsCeTagsSortBy</a>, cdktf.IResolvable]

---


### DataAwsCeTagsTimePeriodOutputReference <a name="DataAwsCeTagsTimePeriodOutputReference" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ce_tags

dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.endInput">end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.startInput">start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.end">end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.start">start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.endInput"></a>

```python
end_input: str
```

- *Type:* str

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.startInput"></a>

```python
start_input: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.end"></a>

```python
end: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.start"></a>

```python
start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriodOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCeTagsTimePeriod
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCeTags.DataAwsCeTagsTimePeriod">DataAwsCeTagsTimePeriod</a>

---



