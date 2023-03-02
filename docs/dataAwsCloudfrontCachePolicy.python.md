# `dataAwsCloudfrontCachePolicy` Submodule <a name="`dataAwsCloudfrontCachePolicy` Submodule" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudfrontCachePolicy <a name="DataAwsCloudfrontCachePolicy" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy aws_cloudfront_cache_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy#id DataAwsCloudfrontCachePolicy#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy#name DataAwsCloudfrontCachePolicy#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy#id DataAwsCloudfrontCachePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy#name DataAwsCloudfrontCachePolicy#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.defaultTtl">default_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.minTtl">min_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.parametersInCacheKeyAndForwardedToOrigin">parameters_in_cache_key_and_forwarded_to_origin</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `default_ttl`<sup>Required</sup> <a name="default_ttl" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.defaultTtl"></a>

```python
default_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ttl`<sup>Required</sup> <a name="min_ttl" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.minTtl"></a>

```python
min_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parameters_in_cache_key_and_forwarded_to_origin`<sup>Required</sup> <a name="parameters_in_cache_key_and_forwarded_to_origin" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.parametersInCacheKeyAndForwardedToOrigin"></a>

```python
parameters_in_cache_key_and_forwarded_to_origin: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudfrontCachePolicyConfig <a name="DataAwsCloudfrontCachePolicyConfig" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy#id DataAwsCloudfrontCachePolicy#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy#name DataAwsCloudfrontCachePolicy#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy#id DataAwsCloudfrontCachePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_cache_policy#name DataAwsCloudfrontCachePolicy#name}.

---

### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin()
```


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig()
```


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies()
```


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig()
```


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders()
```


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig()
```


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.property.items">items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies</a>

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.cookieBehavior">cookie_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.cookies">cookies</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cookie_behavior`<sup>Required</sup> <a name="cookie_behavior" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.cookieBehavior"></a>

```python
cookie_behavior: str
```

- *Type:* str

---

##### `cookies`<sup>Required</sup> <a name="cookies" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.cookies"></a>

```python
cookies: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig</a>

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.property.items">items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders</a>

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.headerBehavior">header_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_behavior`<sup>Required</sup> <a name="header_behavior" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.headerBehavior"></a>

```python
header_behavior: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.headers"></a>

```python
headers: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig</a>

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.cookiesConfig">cookies_config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.enableAcceptEncodingBrotli">enable_accept_encoding_brotli</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.enableAcceptEncodingGzip">enable_accept_encoding_gzip</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.headersConfig">headers_config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.queryStringsConfig">query_strings_config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cookies_config`<sup>Required</sup> <a name="cookies_config" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.cookiesConfig"></a>

```python
cookies_config: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigList</a>

---

##### `enable_accept_encoding_brotli`<sup>Required</sup> <a name="enable_accept_encoding_brotli" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.enableAcceptEncodingBrotli"></a>

```python
enable_accept_encoding_brotli: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enable_accept_encoding_gzip`<sup>Required</sup> <a name="enable_accept_encoding_gzip" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.enableAcceptEncodingGzip"></a>

```python
enable_accept_encoding_gzip: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `headers_config`<sup>Required</sup> <a name="headers_config" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.headersConfig"></a>

```python
headers_config: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigList</a>

---

##### `query_strings_config`<sup>Required</sup> <a name="query_strings_config" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.queryStringsConfig"></a>

```python
query_strings_config: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin</a>

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.queryStringBehavior">query_string_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.queryStrings">query_strings</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_string_behavior`<sup>Required</sup> <a name="query_string_behavior" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.queryStringBehavior"></a>

```python
query_string_behavior: str
```

- *Type:* str

---

##### `query_strings`<sup>Required</sup> <a name="query_strings" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.queryStrings"></a>

```python
query_strings: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig</a>

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference <a name="DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_cache_policy

dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.property.items">items</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.property.items"></a>

```python
items: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontCachePolicy.DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings">DataAwsCloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings</a>

---



