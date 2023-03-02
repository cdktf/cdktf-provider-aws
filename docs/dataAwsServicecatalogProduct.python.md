# `dataAwsServicecatalogProduct` Submodule <a name="`dataAwsServicecatalogProduct` Submodule" id="@cdktf/provider-aws.dataAwsServicecatalogProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServicecatalogProduct <a name="DataAwsServicecatalogProduct" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product aws_servicecatalog_product}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_product

dataAwsServicecatalogProduct.DataAwsServicecatalogProduct(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str,
  accept_language: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataAwsServicecatalogProductTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product#id DataAwsServicecatalogProduct#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.acceptLanguage">accept_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product#accept_language DataAwsServicecatalogProduct#accept_language}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product#tags DataAwsServicecatalogProduct#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeouts">DataAwsServicecatalogProductTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product#id DataAwsServicecatalogProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.acceptLanguage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product#accept_language DataAwsServicecatalogProduct#accept_language}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product#tags DataAwsServicecatalogProduct#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeouts">DataAwsServicecatalogProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product#timeouts DataAwsServicecatalogProduct#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.resetAcceptLanguage">reset_accept_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product#read DataAwsServicecatalogProduct#read}.

---

##### `reset_accept_language` <a name="reset_accept_language" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.resetAcceptLanguage"></a>

```python
def reset_accept_language() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_product

dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_product

dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_product

dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.distributor">distributor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.hasDefaultPath">has_default_path</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.supportDescription">support_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.supportEmail">support_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.supportUrl">support_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference">DataAwsServicecatalogProductTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.acceptLanguageInput">accept_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeouts">DataAwsServicecatalogProductTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.acceptLanguage">accept_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `distributor`<sup>Required</sup> <a name="distributor" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.distributor"></a>

```python
distributor: str
```

- *Type:* str

---

##### `has_default_path`<sup>Required</sup> <a name="has_default_path" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.hasDefaultPath"></a>

```python
has_default_path: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `support_description`<sup>Required</sup> <a name="support_description" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.supportDescription"></a>

```python
support_description: str
```

- *Type:* str

---

##### `support_email`<sup>Required</sup> <a name="support_email" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.supportEmail"></a>

```python
support_email: str
```

- *Type:* str

---

##### `support_url`<sup>Required</sup> <a name="support_url" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.supportUrl"></a>

```python
support_url: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.timeouts"></a>

```python
timeouts: DataAwsServicecatalogProductTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference">DataAwsServicecatalogProductTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `accept_language_input`<sup>Optional</sup> <a name="accept_language_input" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.acceptLanguageInput"></a>

```python
accept_language_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAwsServicecatalogProductTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeouts">DataAwsServicecatalogProductTimeouts</a>, cdktf.IResolvable]

---

##### `accept_language`<sup>Required</sup> <a name="accept_language" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProduct.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServicecatalogProductConfig <a name="DataAwsServicecatalogProductConfig" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_product

dataAwsServicecatalogProduct.DataAwsServicecatalogProductConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str,
  accept_language: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataAwsServicecatalogProductTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product#id DataAwsServicecatalogProduct#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductConfig.property.acceptLanguage">accept_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product#accept_language DataAwsServicecatalogProduct#accept_language}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product#tags DataAwsServicecatalogProduct#tags}. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeouts">DataAwsServicecatalogProductTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product#id DataAwsServicecatalogProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `accept_language`<sup>Optional</sup> <a name="accept_language" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductConfig.property.acceptLanguage"></a>

```python
accept_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product#accept_language DataAwsServicecatalogProduct#accept_language}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product#tags DataAwsServicecatalogProduct#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductConfig.property.timeouts"></a>

```python
timeouts: DataAwsServicecatalogProductTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeouts">DataAwsServicecatalogProductTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product#timeouts DataAwsServicecatalogProduct#timeouts}

---

### DataAwsServicecatalogProductTimeouts <a name="DataAwsServicecatalogProductTimeouts" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_product

dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product#read DataAwsServicecatalogProduct#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicecatalog_product#read DataAwsServicecatalogProduct#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsServicecatalogProductTimeoutsOutputReference <a name="DataAwsServicecatalogProductTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_servicecatalog_product

dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeouts">DataAwsServicecatalogProductTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsServicecatalogProductTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsServicecatalogProduct.DataAwsServicecatalogProductTimeouts">DataAwsServicecatalogProductTimeouts</a>, cdktf.IResolvable]

---



