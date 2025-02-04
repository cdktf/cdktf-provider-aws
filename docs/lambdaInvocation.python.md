# `lambdaInvocation` Submodule <a name="`lambdaInvocation` Submodule" id="@cdktf/provider-aws.lambdaInvocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaInvocation <a name="LambdaInvocation" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation aws_lambda_invocation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_invocation

lambdaInvocation.LambdaInvocation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  function_name: str,
  input: str,
  id: str = None,
  lifecycle_scope: str = None,
  qualifier: str = None,
  terraform_key: str = None,
  triggers: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#function_name LambdaInvocation#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.input">input</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#input LambdaInvocation#input}. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#id LambdaInvocation#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.lifecycleScope">lifecycle_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#lifecycle_scope LambdaInvocation#lifecycle_scope}. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.qualifier">qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#qualifier LambdaInvocation#qualifier}. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.terraformKey">terraform_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#terraform_key LambdaInvocation#terraform_key}. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#triggers LambdaInvocation#triggers}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.functionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#function_name LambdaInvocation#function_name}.

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.input"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#input LambdaInvocation#input}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#id LambdaInvocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycle_scope`<sup>Optional</sup> <a name="lifecycle_scope" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.lifecycleScope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#lifecycle_scope LambdaInvocation#lifecycle_scope}.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.qualifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#qualifier LambdaInvocation#qualifier}.

---

##### `terraform_key`<sup>Optional</sup> <a name="terraform_key" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.terraformKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#terraform_key LambdaInvocation#terraform_key}.

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.Initializer.parameter.triggers"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#triggers LambdaInvocation#triggers}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetLifecycleScope">reset_lifecycle_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetQualifier">reset_qualifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetTerraformKey">reset_terraform_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetTriggers">reset_triggers</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lifecycle_scope` <a name="reset_lifecycle_scope" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetLifecycleScope"></a>

```python
def reset_lifecycle_scope() -> None
```

##### `reset_qualifier` <a name="reset_qualifier" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetQualifier"></a>

```python
def reset_qualifier() -> None
```

##### `reset_terraform_key` <a name="reset_terraform_key" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetTerraformKey"></a>

```python
def reset_terraform_key() -> None
```

##### `reset_triggers` <a name="reset_triggers" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.resetTriggers"></a>

```python
def reset_triggers() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LambdaInvocation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lambda_invocation

lambdaInvocation.LambdaInvocation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lambda_invocation

lambdaInvocation.LambdaInvocation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lambda_invocation

lambdaInvocation.LambdaInvocation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import lambda_invocation

lambdaInvocation.LambdaInvocation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LambdaInvocation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LambdaInvocation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LambdaInvocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LambdaInvocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.result">result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.inputInput">input_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.lifecycleScopeInput">lifecycle_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.qualifierInput">qualifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.terraformKeyInput">terraform_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.triggersInput">triggers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.input">input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.lifecycleScope">lifecycle_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.qualifier">qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.terraformKey">terraform_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.result"></a>

```python
result: str
```

- *Type:* str

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.inputInput"></a>

```python
input_input: str
```

- *Type:* str

---

##### `lifecycle_scope_input`<sup>Optional</sup> <a name="lifecycle_scope_input" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.lifecycleScopeInput"></a>

```python
lifecycle_scope_input: str
```

- *Type:* str

---

##### `qualifier_input`<sup>Optional</sup> <a name="qualifier_input" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.qualifierInput"></a>

```python
qualifier_input: str
```

- *Type:* str

---

##### `terraform_key_input`<sup>Optional</sup> <a name="terraform_key_input" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.terraformKeyInput"></a>

```python
terraform_key_input: str
```

- *Type:* str

---

##### `triggers_input`<sup>Optional</sup> <a name="triggers_input" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.triggersInput"></a>

```python
triggers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.input"></a>

```python
input: str
```

- *Type:* str

---

##### `lifecycle_scope`<sup>Required</sup> <a name="lifecycle_scope" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.lifecycleScope"></a>

```python
lifecycle_scope: str
```

- *Type:* str

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

---

##### `terraform_key`<sup>Required</sup> <a name="terraform_key" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.terraformKey"></a>

```python
terraform_key: str
```

- *Type:* str

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.triggers"></a>

```python
triggers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaInvocationConfig <a name="LambdaInvocationConfig" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lambda_invocation

lambdaInvocation.LambdaInvocationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  function_name: str,
  input: str,
  id: str = None,
  lifecycle_scope: str = None,
  qualifier: str = None,
  terraform_key: str = None,
  triggers: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.functionName">function_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#function_name LambdaInvocation#function_name}. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.input">input</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#input LambdaInvocation#input}. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#id LambdaInvocation#id}. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.lifecycleScope">lifecycle_scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#lifecycle_scope LambdaInvocation#lifecycle_scope}. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.qualifier">qualifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#qualifier LambdaInvocation#qualifier}. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.terraformKey">terraform_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#terraform_key LambdaInvocation#terraform_key}. |
| <code><a href="#@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#triggers LambdaInvocation#triggers}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#function_name LambdaInvocation#function_name}.

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.input"></a>

```python
input: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#input LambdaInvocation#input}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#id LambdaInvocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycle_scope`<sup>Optional</sup> <a name="lifecycle_scope" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.lifecycleScope"></a>

```python
lifecycle_scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#lifecycle_scope LambdaInvocation#lifecycle_scope}.

---

##### `qualifier`<sup>Optional</sup> <a name="qualifier" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#qualifier LambdaInvocation#qualifier}.

---

##### `terraform_key`<sup>Optional</sup> <a name="terraform_key" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.terraformKey"></a>

```python
terraform_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#terraform_key LambdaInvocation#terraform_key}.

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-aws.lambdaInvocation.LambdaInvocationConfig.property.triggers"></a>

```python
triggers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/lambda_invocation#triggers LambdaInvocation#triggers}.

---



