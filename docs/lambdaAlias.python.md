# `lambdaAlias` Submodule <a name="`lambdaAlias` Submodule" id="@cdktf/provider-aws.lambdaAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaAlias <a name="LambdaAlias" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias aws_lambda_alias}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_alias

lambdaAlias.LambdaAlias(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  function_name: str,
  function_version: str,
  name: str,
  description: str = None,
  id: str = None,
  routing_config: LambdaAliasRoutingConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#function_name LambdaAlias#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.functionVersion">function_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#function_version LambdaAlias#function_version}. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#name LambdaAlias#name}. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#description LambdaAlias#description}. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#id LambdaAlias#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.routingConfig">routing_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a></code> | routing_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.functionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#function_name LambdaAlias#function_name}.

---

##### `function_version`<sup>Required</sup> <a name="function_version" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.functionVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#function_version LambdaAlias#function_version}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#name LambdaAlias#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#description LambdaAlias#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#id LambdaAlias#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `routing_config`<sup>Optional</sup> <a name="routing_config" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.Initializer.parameter.routingConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a>

routing_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#routing_config LambdaAlias#routing_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.putRoutingConfig">put_routing_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.resetRoutingConfig">reset_routing_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_routing_config` <a name="put_routing_config" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.putRoutingConfig"></a>

```python
def put_routing_config(
  additional_version_weights: typing.Mapping[typing.Union[int, float]] = None
) -> None
```

###### `additional_version_weights`<sup>Optional</sup> <a name="additional_version_weights" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.putRoutingConfig.parameter.additionalVersionWeights"></a>

- *Type:* typing.Mapping[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#additional_version_weights LambdaAlias#additional_version_weights}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_routing_config` <a name="reset_routing_config" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.resetRoutingConfig"></a>

```python
def reset_routing_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lambda_alias

lambdaAlias.LambdaAlias.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lambda_alias

lambdaAlias.LambdaAlias.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lambda_alias

lambdaAlias.LambdaAlias.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.invokeArn">invoke_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.routingConfig">routing_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference">LambdaAliasRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.functionVersionInput">function_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.routingConfigInput">routing_config_input</a></code> | <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.functionVersion">function_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `invoke_arn`<sup>Required</sup> <a name="invoke_arn" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.invokeArn"></a>

```python
invoke_arn: str
```

- *Type:* str

---

##### `routing_config`<sup>Required</sup> <a name="routing_config" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.routingConfig"></a>

```python
routing_config: LambdaAliasRoutingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference">LambdaAliasRoutingConfigOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `function_version_input`<sup>Optional</sup> <a name="function_version_input" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.functionVersionInput"></a>

```python
function_version_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `routing_config_input`<sup>Optional</sup> <a name="routing_config_input" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.routingConfigInput"></a>

```python
routing_config_input: LambdaAliasRoutingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `function_version`<sup>Required</sup> <a name="function_version" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.functionVersion"></a>

```python
function_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lambdaAlias.LambdaAlias.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaAliasConfig <a name="LambdaAliasConfig" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_alias

lambdaAlias.LambdaAliasConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  function_name: str,
  function_version: str,
  name: str,
  description: str = None,
  id: str = None,
  routing_config: LambdaAliasRoutingConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#function_name LambdaAlias#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.functionVersion">function_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#function_version LambdaAlias#function_version}. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#name LambdaAlias#name}. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#description LambdaAlias#description}. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#id LambdaAlias#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.routingConfig">routing_config</a></code> | <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a></code> | routing_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#function_name LambdaAlias#function_name}.

---

##### `function_version`<sup>Required</sup> <a name="function_version" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.functionVersion"></a>

```python
function_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#function_version LambdaAlias#function_version}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#name LambdaAlias#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#description LambdaAlias#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#id LambdaAlias#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `routing_config`<sup>Optional</sup> <a name="routing_config" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasConfig.property.routingConfig"></a>

```python
routing_config: LambdaAliasRoutingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a>

routing_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#routing_config LambdaAlias#routing_config}

---

### LambdaAliasRoutingConfig <a name="LambdaAliasRoutingConfig" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_alias

lambdaAlias.LambdaAliasRoutingConfig(
  additional_version_weights: typing.Mapping[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfig.property.additionalVersionWeights">additional_version_weights</a></code> | <code>typing.Mapping[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#additional_version_weights LambdaAlias#additional_version_weights}. |

---

##### `additional_version_weights`<sup>Optional</sup> <a name="additional_version_weights" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfig.property.additionalVersionWeights"></a>

```python
additional_version_weights: typing.Mapping[typing.Union[int, float]]
```

- *Type:* typing.Mapping[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias#additional_version_weights LambdaAlias#additional_version_weights}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaAliasRoutingConfigOutputReference <a name="LambdaAliasRoutingConfigOutputReference" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_alias

lambdaAlias.LambdaAliasRoutingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.resetAdditionalVersionWeights">reset_additional_version_weights</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_version_weights` <a name="reset_additional_version_weights" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.resetAdditionalVersionWeights"></a>

```python
def reset_additional_version_weights() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.additionalVersionWeightsInput">additional_version_weights_input</a></code> | <code>typing.Mapping[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.additionalVersionWeights">additional_version_weights</a></code> | <code>typing.Mapping[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_version_weights_input`<sup>Optional</sup> <a name="additional_version_weights_input" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.additionalVersionWeightsInput"></a>

```python
additional_version_weights_input: typing.Mapping[typing.Union[int, float]]
```

- *Type:* typing.Mapping[typing.Union[int, float]]

---

##### `additional_version_weights`<sup>Required</sup> <a name="additional_version_weights" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.additionalVersionWeights"></a>

```python
additional_version_weights: typing.Mapping[typing.Union[int, float]]
```

- *Type:* typing.Mapping[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfigOutputReference.property.internalValue"></a>

```python
internal_value: LambdaAliasRoutingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.lambdaAlias.LambdaAliasRoutingConfig">LambdaAliasRoutingConfig</a>

---



