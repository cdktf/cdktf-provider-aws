# `dataAwsVpcIpamPools` Submodule <a name="`dataAwsVpcIpamPools` Submodule" id="@cdktf/provider-aws.dataAwsVpcIpamPools"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcIpamPools <a name="DataAwsVpcIpamPools" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pools aws_vpc_ipam_pools}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_pools

dataAwsVpcIpamPools.DataAwsVpcIpamPools(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsVpcIpamPoolsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilter">DataAwsVpcIpamPoolsFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pools#id DataAwsVpcIpamPools#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilter">DataAwsVpcIpamPoolsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pools#filter DataAwsVpcIpamPools#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pools#id DataAwsVpcIpamPools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataAwsVpcIpamPoolsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilter">DataAwsVpcIpamPoolsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_pools

dataAwsVpcIpamPools.DataAwsVpcIpamPools.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_pools

dataAwsVpcIpamPools.DataAwsVpcIpamPools.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_pools

dataAwsVpcIpamPools.DataAwsVpcIpamPools.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList">DataAwsVpcIpamPoolsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.ipamPools">ipam_pools</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsList">DataAwsVpcIpamPoolsIpamPoolsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilter">DataAwsVpcIpamPoolsFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.filter"></a>

```python
filter: DataAwsVpcIpamPoolsFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList">DataAwsVpcIpamPoolsFilterList</a>

---

##### `ipam_pools`<sup>Required</sup> <a name="ipam_pools" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.ipamPools"></a>

```python
ipam_pools: DataAwsVpcIpamPoolsIpamPoolsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsList">DataAwsVpcIpamPoolsIpamPoolsList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataAwsVpcIpamPoolsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilter">DataAwsVpcIpamPoolsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPools.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcIpamPoolsConfig <a name="DataAwsVpcIpamPoolsConfig" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_pools

dataAwsVpcIpamPools.DataAwsVpcIpamPoolsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsVpcIpamPoolsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilter">DataAwsVpcIpamPoolsFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pools#id DataAwsVpcIpamPools#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataAwsVpcIpamPoolsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilter">DataAwsVpcIpamPoolsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pools#filter DataAwsVpcIpamPools#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pools#id DataAwsVpcIpamPools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsVpcIpamPoolsFilter <a name="DataAwsVpcIpamPoolsFilter" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_pools

dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pools#name DataAwsVpcIpamPools#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pools#values DataAwsVpcIpamPools#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pools#name DataAwsVpcIpamPools#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pools#values DataAwsVpcIpamPools#values}.

---

### DataAwsVpcIpamPoolsIpamPools <a name="DataAwsVpcIpamPoolsIpamPools" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPools"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPools.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_pools

dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPools()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpcIpamPoolsFilterList <a name="DataAwsVpcIpamPoolsFilterList" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_pools

dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsVpcIpamPoolsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilter">DataAwsVpcIpamPoolsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsVpcIpamPoolsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilter">DataAwsVpcIpamPoolsFilter</a>]]

---


### DataAwsVpcIpamPoolsFilterOutputReference <a name="DataAwsVpcIpamPoolsFilterOutputReference" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_pools

dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilter">DataAwsVpcIpamPoolsFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsVpcIpamPoolsFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsFilter">DataAwsVpcIpamPoolsFilter</a>, cdktf.IResolvable]

---


### DataAwsVpcIpamPoolsIpamPoolsList <a name="DataAwsVpcIpamPoolsIpamPoolsList" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_pools

dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsVpcIpamPoolsIpamPoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsVpcIpamPoolsIpamPoolsOutputReference <a name="DataAwsVpcIpamPoolsIpamPoolsOutputReference" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_vpc_ipam_pools

dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.addressFamily">address_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.allocationDefaultNetmaskLength">allocation_default_netmask_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.allocationMaxNetmaskLength">allocation_max_netmask_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.allocationMinNetmaskLength">allocation_min_netmask_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.allocationResourceTags">allocation_resource_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.autoImport">auto_import</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.awsService">aws_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.ipamPoolId">ipam_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.ipamScopeId">ipam_scope_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.ipamScopeType">ipam_scope_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.poolDepth">pool_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.publiclyAdvertisable">publicly_advertisable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.sourceIpamPoolId">source_ipam_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPools">DataAwsVpcIpamPoolsIpamPools</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

---

##### `allocation_default_netmask_length`<sup>Required</sup> <a name="allocation_default_netmask_length" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.allocationDefaultNetmaskLength"></a>

```python
allocation_default_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocation_max_netmask_length`<sup>Required</sup> <a name="allocation_max_netmask_length" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.allocationMaxNetmaskLength"></a>

```python
allocation_max_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocation_min_netmask_length`<sup>Required</sup> <a name="allocation_min_netmask_length" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.allocationMinNetmaskLength"></a>

```python
allocation_min_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocation_resource_tags`<sup>Required</sup> <a name="allocation_resource_tags" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.allocationResourceTags"></a>

```python
allocation_resource_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auto_import`<sup>Required</sup> <a name="auto_import" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.autoImport"></a>

```python
auto_import: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `aws_service`<sup>Required</sup> <a name="aws_service" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.awsService"></a>

```python
aws_service: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipam_pool_id`<sup>Required</sup> <a name="ipam_pool_id" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.ipamPoolId"></a>

```python
ipam_pool_id: str
```

- *Type:* str

---

##### `ipam_scope_id`<sup>Required</sup> <a name="ipam_scope_id" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.ipamScopeId"></a>

```python
ipam_scope_id: str
```

- *Type:* str

---

##### `ipam_scope_type`<sup>Required</sup> <a name="ipam_scope_type" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.ipamScopeType"></a>

```python
ipam_scope_type: str
```

- *Type:* str

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `pool_depth`<sup>Required</sup> <a name="pool_depth" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.poolDepth"></a>

```python
pool_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `publicly_advertisable`<sup>Required</sup> <a name="publicly_advertisable" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.publiclyAdvertisable"></a>

```python
publicly_advertisable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `source_ipam_pool_id`<sup>Required</sup> <a name="source_ipam_pool_id" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.sourceIpamPoolId"></a>

```python
source_ipam_pool_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPoolsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsVpcIpamPoolsIpamPools
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsVpcIpamPools.DataAwsVpcIpamPoolsIpamPools">DataAwsVpcIpamPoolsIpamPools</a>

---



