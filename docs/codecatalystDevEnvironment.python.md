# `aws_codecatalyst_dev_environment`

Refer to the Terraform Registory for docs: [`aws_codecatalyst_dev_environment`](https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment).

# `codecatalystDevEnvironment` Submodule <a name="`codecatalystDevEnvironment` Submodule" id="@cdktf/provider-aws.codecatalystDevEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodecatalystDevEnvironment <a name="CodecatalystDevEnvironment" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment aws_codecatalyst_dev_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codecatalyst_dev_environment

codecatalystDevEnvironment.CodecatalystDevEnvironment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ides: CodecatalystDevEnvironmentIdes,
  instance_type: str,
  persistent_storage: CodecatalystDevEnvironmentPersistentStorage,
  project_name: str,
  space_name: str,
  alias: str = None,
  id: str = None,
  inactivity_timeout_minutes: typing.Union[int, float] = None,
  repositories: typing.Union[IResolvable, typing.List[CodecatalystDevEnvironmentRepositories]] = None,
  timeouts: CodecatalystDevEnvironmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.ides">ides</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes">CodecatalystDevEnvironmentIdes</a></code> | ides block. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#instance_type CodecatalystDevEnvironment#instance_type}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.persistentStorage">persistent_storage</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage">CodecatalystDevEnvironmentPersistentStorage</a></code> | persistent_storage block. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.projectName">project_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#project_name CodecatalystDevEnvironment#project_name}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.spaceName">space_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#space_name CodecatalystDevEnvironment#space_name}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#alias CodecatalystDevEnvironment#alias}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#id CodecatalystDevEnvironment#id}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.inactivityTimeoutMinutes">inactivity_timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#inactivity_timeout_minutes CodecatalystDevEnvironment#inactivity_timeout_minutes}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.repositories">repositories</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories">CodecatalystDevEnvironmentRepositories</a>]]</code> | repositories block. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts">CodecatalystDevEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ides`<sup>Required</sup> <a name="ides" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.ides"></a>

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes">CodecatalystDevEnvironmentIdes</a>

ides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#ides CodecatalystDevEnvironment#ides}

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#instance_type CodecatalystDevEnvironment#instance_type}.

---

##### `persistent_storage`<sup>Required</sup> <a name="persistent_storage" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.persistentStorage"></a>

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage">CodecatalystDevEnvironmentPersistentStorage</a>

persistent_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#persistent_storage CodecatalystDevEnvironment#persistent_storage}

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.projectName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#project_name CodecatalystDevEnvironment#project_name}.

---

##### `space_name`<sup>Required</sup> <a name="space_name" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.spaceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#space_name CodecatalystDevEnvironment#space_name}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.alias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#alias CodecatalystDevEnvironment#alias}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#id CodecatalystDevEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inactivity_timeout_minutes`<sup>Optional</sup> <a name="inactivity_timeout_minutes" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.inactivityTimeoutMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#inactivity_timeout_minutes CodecatalystDevEnvironment#inactivity_timeout_minutes}.

---

##### `repositories`<sup>Optional</sup> <a name="repositories" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.repositories"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories">CodecatalystDevEnvironmentRepositories</a>]]

repositories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#repositories CodecatalystDevEnvironment#repositories}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts">CodecatalystDevEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#timeouts CodecatalystDevEnvironment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putIdes">put_ides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putPersistentStorage">put_persistent_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putRepositories">put_repositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetInactivityTimeoutMinutes">reset_inactivity_timeout_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetRepositories">reset_repositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_ides` <a name="put_ides" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putIdes"></a>

```python
def put_ides(
  name: str = None,
  runtime: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putIdes.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#name CodecatalystDevEnvironment#name}.

---

###### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putIdes.parameter.runtime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#runtime CodecatalystDevEnvironment#runtime}.

---

##### `put_persistent_storage` <a name="put_persistent_storage" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putPersistentStorage"></a>

```python
def put_persistent_storage(
  size: typing.Union[int, float]
) -> None
```

###### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putPersistentStorage.parameter.size"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#size CodecatalystDevEnvironment#size}.

---

##### `put_repositories` <a name="put_repositories" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putRepositories"></a>

```python
def put_repositories(
  value: typing.Union[IResolvable, typing.List[CodecatalystDevEnvironmentRepositories]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putRepositories.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories">CodecatalystDevEnvironmentRepositories</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#create CodecatalystDevEnvironment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#delete CodecatalystDevEnvironment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#update CodecatalystDevEnvironment#update}.

---

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_inactivity_timeout_minutes` <a name="reset_inactivity_timeout_minutes" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetInactivityTimeoutMinutes"></a>

```python
def reset_inactivity_timeout_minutes() -> None
```

##### `reset_repositories` <a name="reset_repositories" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetRepositories"></a>

```python
def reset_repositories() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CodecatalystDevEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import codecatalyst_dev_environment

codecatalystDevEnvironment.CodecatalystDevEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import codecatalyst_dev_environment

codecatalystDevEnvironment.CodecatalystDevEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import codecatalyst_dev_environment

codecatalystDevEnvironment.CodecatalystDevEnvironment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import codecatalyst_dev_environment

codecatalystDevEnvironment.CodecatalystDevEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CodecatalystDevEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CodecatalystDevEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CodecatalystDevEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CodecatalystDevEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.ides">ides</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference">CodecatalystDevEnvironmentIdesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.persistentStorage">persistent_storage</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference">CodecatalystDevEnvironmentPersistentStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.repositories">repositories</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList">CodecatalystDevEnvironmentRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference">CodecatalystDevEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.idesInput">ides_input</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes">CodecatalystDevEnvironmentIdes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.inactivityTimeoutMinutesInput">inactivity_timeout_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.persistentStorageInput">persistent_storage_input</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage">CodecatalystDevEnvironmentPersistentStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.projectNameInput">project_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.repositoriesInput">repositories_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories">CodecatalystDevEnvironmentRepositories</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.spaceNameInput">space_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts">CodecatalystDevEnvironmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.inactivityTimeoutMinutes">inactivity_timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.projectName">project_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.spaceName">space_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ides`<sup>Required</sup> <a name="ides" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.ides"></a>

```python
ides: CodecatalystDevEnvironmentIdesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference">CodecatalystDevEnvironmentIdesOutputReference</a>

---

##### `persistent_storage`<sup>Required</sup> <a name="persistent_storage" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.persistentStorage"></a>

```python
persistent_storage: CodecatalystDevEnvironmentPersistentStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference">CodecatalystDevEnvironmentPersistentStorageOutputReference</a>

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.repositories"></a>

```python
repositories: CodecatalystDevEnvironmentRepositoriesList
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList">CodecatalystDevEnvironmentRepositoriesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.timeouts"></a>

```python
timeouts: CodecatalystDevEnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference">CodecatalystDevEnvironmentTimeoutsOutputReference</a>

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `ides_input`<sup>Optional</sup> <a name="ides_input" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.idesInput"></a>

```python
ides_input: CodecatalystDevEnvironmentIdes
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes">CodecatalystDevEnvironmentIdes</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inactivity_timeout_minutes_input`<sup>Optional</sup> <a name="inactivity_timeout_minutes_input" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.inactivityTimeoutMinutesInput"></a>

```python
inactivity_timeout_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `persistent_storage_input`<sup>Optional</sup> <a name="persistent_storage_input" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.persistentStorageInput"></a>

```python
persistent_storage_input: CodecatalystDevEnvironmentPersistentStorage
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage">CodecatalystDevEnvironmentPersistentStorage</a>

---

##### `project_name_input`<sup>Optional</sup> <a name="project_name_input" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.projectNameInput"></a>

```python
project_name_input: str
```

- *Type:* str

---

##### `repositories_input`<sup>Optional</sup> <a name="repositories_input" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.repositoriesInput"></a>

```python
repositories_input: typing.Union[IResolvable, typing.List[CodecatalystDevEnvironmentRepositories]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories">CodecatalystDevEnvironmentRepositories</a>]]

---

##### `space_name_input`<sup>Optional</sup> <a name="space_name_input" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.spaceNameInput"></a>

```python
space_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CodecatalystDevEnvironmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts">CodecatalystDevEnvironmentTimeouts</a>]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inactivity_timeout_minutes`<sup>Required</sup> <a name="inactivity_timeout_minutes" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.inactivityTimeoutMinutes"></a>

```python
inactivity_timeout_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

---

##### `space_name`<sup>Required</sup> <a name="space_name" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.spaceName"></a>

```python
space_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodecatalystDevEnvironmentConfig <a name="CodecatalystDevEnvironmentConfig" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codecatalyst_dev_environment

codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ides: CodecatalystDevEnvironmentIdes,
  instance_type: str,
  persistent_storage: CodecatalystDevEnvironmentPersistentStorage,
  project_name: str,
  space_name: str,
  alias: str = None,
  id: str = None,
  inactivity_timeout_minutes: typing.Union[int, float] = None,
  repositories: typing.Union[IResolvable, typing.List[CodecatalystDevEnvironmentRepositories]] = None,
  timeouts: CodecatalystDevEnvironmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.ides">ides</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes">CodecatalystDevEnvironmentIdes</a></code> | ides block. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#instance_type CodecatalystDevEnvironment#instance_type}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.persistentStorage">persistent_storage</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage">CodecatalystDevEnvironmentPersistentStorage</a></code> | persistent_storage block. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.projectName">project_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#project_name CodecatalystDevEnvironment#project_name}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.spaceName">space_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#space_name CodecatalystDevEnvironment#space_name}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.alias">alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#alias CodecatalystDevEnvironment#alias}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#id CodecatalystDevEnvironment#id}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.inactivityTimeoutMinutes">inactivity_timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#inactivity_timeout_minutes CodecatalystDevEnvironment#inactivity_timeout_minutes}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.repositories">repositories</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories">CodecatalystDevEnvironmentRepositories</a>]]</code> | repositories block. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts">CodecatalystDevEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ides`<sup>Required</sup> <a name="ides" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.ides"></a>

```python
ides: CodecatalystDevEnvironmentIdes
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes">CodecatalystDevEnvironmentIdes</a>

ides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#ides CodecatalystDevEnvironment#ides}

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#instance_type CodecatalystDevEnvironment#instance_type}.

---

##### `persistent_storage`<sup>Required</sup> <a name="persistent_storage" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.persistentStorage"></a>

```python
persistent_storage: CodecatalystDevEnvironmentPersistentStorage
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage">CodecatalystDevEnvironmentPersistentStorage</a>

persistent_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#persistent_storage CodecatalystDevEnvironment#persistent_storage}

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#project_name CodecatalystDevEnvironment#project_name}.

---

##### `space_name`<sup>Required</sup> <a name="space_name" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.spaceName"></a>

```python
space_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#space_name CodecatalystDevEnvironment#space_name}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#alias CodecatalystDevEnvironment#alias}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#id CodecatalystDevEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inactivity_timeout_minutes`<sup>Optional</sup> <a name="inactivity_timeout_minutes" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.inactivityTimeoutMinutes"></a>

```python
inactivity_timeout_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#inactivity_timeout_minutes CodecatalystDevEnvironment#inactivity_timeout_minutes}.

---

##### `repositories`<sup>Optional</sup> <a name="repositories" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.repositories"></a>

```python
repositories: typing.Union[IResolvable, typing.List[CodecatalystDevEnvironmentRepositories]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories">CodecatalystDevEnvironmentRepositories</a>]]

repositories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#repositories CodecatalystDevEnvironment#repositories}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentConfig.property.timeouts"></a>

```python
timeouts: CodecatalystDevEnvironmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts">CodecatalystDevEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#timeouts CodecatalystDevEnvironment#timeouts}

---

### CodecatalystDevEnvironmentIdes <a name="CodecatalystDevEnvironmentIdes" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codecatalyst_dev_environment

codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes(
  name: str = None,
  runtime: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#name CodecatalystDevEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes.property.runtime">runtime</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#runtime CodecatalystDevEnvironment#runtime}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#name CodecatalystDevEnvironment#name}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#runtime CodecatalystDevEnvironment#runtime}.

---

### CodecatalystDevEnvironmentPersistentStorage <a name="CodecatalystDevEnvironmentPersistentStorage" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codecatalyst_dev_environment

codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage(
  size: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#size CodecatalystDevEnvironment#size}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#size CodecatalystDevEnvironment#size}.

---

### CodecatalystDevEnvironmentRepositories <a name="CodecatalystDevEnvironmentRepositories" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codecatalyst_dev_environment

codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories(
  repository_name: str,
  branch_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories.property.repositoryName">repository_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#repository_name CodecatalystDevEnvironment#repository_name}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories.property.branchName">branch_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#branch_name CodecatalystDevEnvironment#branch_name}. |

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#repository_name CodecatalystDevEnvironment#repository_name}.

---

##### `branch_name`<sup>Optional</sup> <a name="branch_name" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#branch_name CodecatalystDevEnvironment#branch_name}.

---

### CodecatalystDevEnvironmentTimeouts <a name="CodecatalystDevEnvironmentTimeouts" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codecatalyst_dev_environment

codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#create CodecatalystDevEnvironment#create}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#delete CodecatalystDevEnvironment#delete}. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#update CodecatalystDevEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#create CodecatalystDevEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#delete CodecatalystDevEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.27.0/docs/resources/codecatalyst_dev_environment#update CodecatalystDevEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodecatalystDevEnvironmentIdesOutputReference <a name="CodecatalystDevEnvironmentIdesOutputReference" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codecatalyst_dev_environment

codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.resetRuntime">reset_runtime</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_runtime` <a name="reset_runtime" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.resetRuntime"></a>

```python
def reset_runtime() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.runtimeInput">runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes">CodecatalystDevEnvironmentIdes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.runtimeInput"></a>

```python
runtime_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdesOutputReference.property.internalValue"></a>

```python
internal_value: CodecatalystDevEnvironmentIdes
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentIdes">CodecatalystDevEnvironmentIdes</a>

---


### CodecatalystDevEnvironmentPersistentStorageOutputReference <a name="CodecatalystDevEnvironmentPersistentStorageOutputReference" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codecatalyst_dev_environment

codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage">CodecatalystDevEnvironmentPersistentStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorageOutputReference.property.internalValue"></a>

```python
internal_value: CodecatalystDevEnvironmentPersistentStorage
```

- *Type:* <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentPersistentStorage">CodecatalystDevEnvironmentPersistentStorage</a>

---


### CodecatalystDevEnvironmentRepositoriesList <a name="CodecatalystDevEnvironmentRepositoriesList" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codecatalyst_dev_environment

codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodecatalystDevEnvironmentRepositoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories">CodecatalystDevEnvironmentRepositories</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CodecatalystDevEnvironmentRepositories]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories">CodecatalystDevEnvironmentRepositories</a>]]

---


### CodecatalystDevEnvironmentRepositoriesOutputReference <a name="CodecatalystDevEnvironmentRepositoriesOutputReference" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codecatalyst_dev_environment

codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.resetBranchName">reset_branch_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branch_name` <a name="reset_branch_name" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.resetBranchName"></a>

```python
def reset_branch_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.branchNameInput">branch_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.repositoryNameInput">repository_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.branchName">branch_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories">CodecatalystDevEnvironmentRepositories</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_name_input`<sup>Optional</sup> <a name="branch_name_input" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.branchNameInput"></a>

```python
branch_name_input: str
```

- *Type:* str

---

##### `repository_name_input`<sup>Optional</sup> <a name="repository_name_input" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.repositoryNameInput"></a>

```python
repository_name_input: str
```

- *Type:* str

---

##### `branch_name`<sup>Required</sup> <a name="branch_name" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositoriesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CodecatalystDevEnvironmentRepositories]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentRepositories">CodecatalystDevEnvironmentRepositories</a>]

---


### CodecatalystDevEnvironmentTimeoutsOutputReference <a name="CodecatalystDevEnvironmentTimeoutsOutputReference" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codecatalyst_dev_environment

codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts">CodecatalystDevEnvironmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CodecatalystDevEnvironmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codecatalystDevEnvironment.CodecatalystDevEnvironmentTimeouts">CodecatalystDevEnvironmentTimeouts</a>]

---



