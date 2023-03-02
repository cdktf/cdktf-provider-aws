# `dataAwsRoute53ResolverEndpoint` Submodule <a name="`dataAwsRoute53ResolverEndpoint` Submodule" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute53ResolverEndpoint <a name="DataAwsRoute53ResolverEndpoint" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint aws_route53_resolver_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_endpoint

dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsRoute53ResolverEndpointFilter]] = None,
  id: str = None,
  resolver_endpoint_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter">DataAwsRoute53ResolverEndpointFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint#id DataAwsRoute53ResolverEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.resolverEndpointId">resolver_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint#resolver_endpoint_id DataAwsRoute53ResolverEndpoint#resolver_endpoint_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter">DataAwsRoute53ResolverEndpointFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint#filter DataAwsRoute53ResolverEndpoint#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint#id DataAwsRoute53ResolverEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resolver_endpoint_id`<sup>Optional</sup> <a name="resolver_endpoint_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.Initializer.parameter.resolverEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint#resolver_endpoint_id DataAwsRoute53ResolverEndpoint#resolver_endpoint_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.resetResolverEndpointId">reset_resolver_endpoint_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataAwsRoute53ResolverEndpointFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter">DataAwsRoute53ResolverEndpointFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resolver_endpoint_id` <a name="reset_resolver_endpoint_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.resetResolverEndpointId"></a>

```python
def reset_resolver_endpoint_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_endpoint

dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_endpoint

dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_endpoint

dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList">DataAwsRoute53ResolverEndpointFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter">DataAwsRoute53ResolverEndpointFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.resolverEndpointIdInput">resolver_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.resolverEndpointId">resolver_endpoint_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.filter"></a>

```python
filter: DataAwsRoute53ResolverEndpointFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList">DataAwsRoute53ResolverEndpointFilterList</a>

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataAwsRoute53ResolverEndpointFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter">DataAwsRoute53ResolverEndpointFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resolver_endpoint_id_input`<sup>Optional</sup> <a name="resolver_endpoint_id_input" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.resolverEndpointIdInput"></a>

```python
resolver_endpoint_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resolver_endpoint_id`<sup>Required</sup> <a name="resolver_endpoint_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.resolverEndpointId"></a>

```python
resolver_endpoint_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRoute53ResolverEndpointConfig <a name="DataAwsRoute53ResolverEndpointConfig" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_endpoint

dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsRoute53ResolverEndpointFilter]] = None,
  id: str = None,
  resolver_endpoint_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter">DataAwsRoute53ResolverEndpointFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint#id DataAwsRoute53ResolverEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.resolverEndpointId">resolver_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint#resolver_endpoint_id DataAwsRoute53ResolverEndpoint#resolver_endpoint_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataAwsRoute53ResolverEndpointFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter">DataAwsRoute53ResolverEndpointFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint#filter DataAwsRoute53ResolverEndpoint#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint#id DataAwsRoute53ResolverEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resolver_endpoint_id`<sup>Optional</sup> <a name="resolver_endpoint_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointConfig.property.resolverEndpointId"></a>

```python
resolver_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint#resolver_endpoint_id DataAwsRoute53ResolverEndpoint#resolver_endpoint_id}.

---

### DataAwsRoute53ResolverEndpointFilter <a name="DataAwsRoute53ResolverEndpointFilter" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_endpoint

dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint#name DataAwsRoute53ResolverEndpoint#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint#values DataAwsRoute53ResolverEndpoint#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint#name DataAwsRoute53ResolverEndpoint#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_endpoint#values DataAwsRoute53ResolverEndpoint#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsRoute53ResolverEndpointFilterList <a name="DataAwsRoute53ResolverEndpointFilterList" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_endpoint

dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsRoute53ResolverEndpointFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter">DataAwsRoute53ResolverEndpointFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsRoute53ResolverEndpointFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter">DataAwsRoute53ResolverEndpointFilter</a>]]

---


### DataAwsRoute53ResolverEndpointFilterOutputReference <a name="DataAwsRoute53ResolverEndpointFilterOutputReference" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_endpoint

dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter">DataAwsRoute53ResolverEndpointFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsRoute53ResolverEndpointFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsRoute53ResolverEndpoint.DataAwsRoute53ResolverEndpointFilter">DataAwsRoute53ResolverEndpointFilter</a>, cdktf.IResolvable]

---



