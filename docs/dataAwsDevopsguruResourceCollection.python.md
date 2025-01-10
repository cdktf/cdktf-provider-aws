# `dataAwsDevopsguruResourceCollection` Submodule <a name="`dataAwsDevopsguruResourceCollection` Submodule" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDevopsguruResourceCollection <a name="DataAwsDevopsguruResourceCollection" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/devopsguru_resource_collection aws_devopsguru_resource_collection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_devopsguru_resource_collection

dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  type: str,
  cloudformation: typing.Union[IResolvable, typing.List[DataAwsDevopsguruResourceCollectionCloudformation]] = None,
  tags: typing.Union[IResolvable, typing.List[DataAwsDevopsguruResourceCollectionTags]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/devopsguru_resource_collection#type DataAwsDevopsguruResourceCollection#type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.cloudformation">cloudformation</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformation">DataAwsDevopsguruResourceCollectionCloudformation</a>]]</code> | cloudformation block. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTags">DataAwsDevopsguruResourceCollectionTags</a>]]</code> | tags block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/devopsguru_resource_collection#type DataAwsDevopsguruResourceCollection#type}.

---

##### `cloudformation`<sup>Optional</sup> <a name="cloudformation" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.cloudformation"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformation">DataAwsDevopsguruResourceCollectionCloudformation</a>]]

cloudformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/devopsguru_resource_collection#cloudformation DataAwsDevopsguruResourceCollection#cloudformation}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTags">DataAwsDevopsguruResourceCollectionTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/devopsguru_resource_collection#tags DataAwsDevopsguruResourceCollection#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.putCloudformation">put_cloudformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.resetCloudformation">reset_cloudformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_cloudformation` <a name="put_cloudformation" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.putCloudformation"></a>

```python
def put_cloudformation(
  value: typing.Union[IResolvable, typing.List[DataAwsDevopsguruResourceCollectionCloudformation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.putCloudformation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformation">DataAwsDevopsguruResourceCollectionCloudformation</a>]]

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[DataAwsDevopsguruResourceCollectionTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTags">DataAwsDevopsguruResourceCollectionTags</a>]]

---

##### `reset_cloudformation` <a name="reset_cloudformation" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.resetCloudformation"></a>

```python
def reset_cloudformation() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsDevopsguruResourceCollection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_devopsguru_resource_collection

dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_devopsguru_resource_collection

dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_devopsguru_resource_collection

dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_devopsguru_resource_collection

dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsDevopsguruResourceCollection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsDevopsguruResourceCollection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsDevopsguruResourceCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/devopsguru_resource_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsDevopsguruResourceCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.cloudformation">cloudformation</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList">DataAwsDevopsguruResourceCollectionCloudformationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList">DataAwsDevopsguruResourceCollectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.cloudformationInput">cloudformation_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformation">DataAwsDevopsguruResourceCollectionCloudformation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTags">DataAwsDevopsguruResourceCollectionTags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cloudformation`<sup>Required</sup> <a name="cloudformation" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.cloudformation"></a>

```python
cloudformation: DataAwsDevopsguruResourceCollectionCloudformationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList">DataAwsDevopsguruResourceCollectionCloudformationList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.tags"></a>

```python
tags: DataAwsDevopsguruResourceCollectionTagsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList">DataAwsDevopsguruResourceCollectionTagsList</a>

---

##### `cloudformation_input`<sup>Optional</sup> <a name="cloudformation_input" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.cloudformationInput"></a>

```python
cloudformation_input: typing.Union[IResolvable, typing.List[DataAwsDevopsguruResourceCollectionCloudformation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformation">DataAwsDevopsguruResourceCollectionCloudformation</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[DataAwsDevopsguruResourceCollectionTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTags">DataAwsDevopsguruResourceCollectionTags</a>]]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDevopsguruResourceCollectionCloudformation <a name="DataAwsDevopsguruResourceCollectionCloudformation" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_devopsguru_resource_collection

dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformation()
```


### DataAwsDevopsguruResourceCollectionConfig <a name="DataAwsDevopsguruResourceCollectionConfig" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_devopsguru_resource_collection

dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  type: str,
  cloudformation: typing.Union[IResolvable, typing.List[DataAwsDevopsguruResourceCollectionCloudformation]] = None,
  tags: typing.Union[IResolvable, typing.List[DataAwsDevopsguruResourceCollectionTags]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/devopsguru_resource_collection#type DataAwsDevopsguruResourceCollection#type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.cloudformation">cloudformation</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformation">DataAwsDevopsguruResourceCollectionCloudformation</a>]]</code> | cloudformation block. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTags">DataAwsDevopsguruResourceCollectionTags</a>]]</code> | tags block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/devopsguru_resource_collection#type DataAwsDevopsguruResourceCollection#type}.

---

##### `cloudformation`<sup>Optional</sup> <a name="cloudformation" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.cloudformation"></a>

```python
cloudformation: typing.Union[IResolvable, typing.List[DataAwsDevopsguruResourceCollectionCloudformation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformation">DataAwsDevopsguruResourceCollectionCloudformation</a>]]

cloudformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/devopsguru_resource_collection#cloudformation DataAwsDevopsguruResourceCollection#cloudformation}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[DataAwsDevopsguruResourceCollectionTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTags">DataAwsDevopsguruResourceCollectionTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/devopsguru_resource_collection#tags DataAwsDevopsguruResourceCollection#tags}

---

### DataAwsDevopsguruResourceCollectionTags <a name="DataAwsDevopsguruResourceCollectionTags" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTags.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_devopsguru_resource_collection

dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsDevopsguruResourceCollectionCloudformationList <a name="DataAwsDevopsguruResourceCollectionCloudformationList" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_devopsguru_resource_collection

dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsDevopsguruResourceCollectionCloudformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformation">DataAwsDevopsguruResourceCollectionCloudformation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsDevopsguruResourceCollectionCloudformation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformation">DataAwsDevopsguruResourceCollectionCloudformation</a>]]

---


### DataAwsDevopsguruResourceCollectionCloudformationOutputReference <a name="DataAwsDevopsguruResourceCollectionCloudformationOutputReference" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_devopsguru_resource_collection

dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.property.stackNames">stack_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformation">DataAwsDevopsguruResourceCollectionCloudformation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stack_names`<sup>Required</sup> <a name="stack_names" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.property.stackNames"></a>

```python
stack_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsDevopsguruResourceCollectionCloudformation]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformation">DataAwsDevopsguruResourceCollectionCloudformation</a>]

---


### DataAwsDevopsguruResourceCollectionTagsList <a name="DataAwsDevopsguruResourceCollectionTagsList" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_devopsguru_resource_collection

dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsDevopsguruResourceCollectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTags">DataAwsDevopsguruResourceCollectionTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsDevopsguruResourceCollectionTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTags">DataAwsDevopsguruResourceCollectionTags</a>]]

---


### DataAwsDevopsguruResourceCollectionTagsOutputReference <a name="DataAwsDevopsguruResourceCollectionTagsOutputReference" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_devopsguru_resource_collection

dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.appBoundaryKey">app_boundary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.tagValues">tag_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTags">DataAwsDevopsguruResourceCollectionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_boundary_key`<sup>Required</sup> <a name="app_boundary_key" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.appBoundaryKey"></a>

```python
app_boundary_key: str
```

- *Type:* str

---

##### `tag_values`<sup>Required</sup> <a name="tag_values" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.tagValues"></a>

```python
tag_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsDevopsguruResourceCollectionTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTags">DataAwsDevopsguruResourceCollectionTags</a>]

---



