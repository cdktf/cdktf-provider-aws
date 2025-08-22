# `secretsmanagerSecretVersion` Submodule <a name="`secretsmanagerSecretVersion` Submodule" id="@cdktf/provider-aws.secretsmanagerSecretVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsmanagerSecretVersion <a name="SecretsmanagerSecretVersion" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version aws_secretsmanager_secret_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import secretsmanager_secret_version

secretsmanagerSecretVersion.SecretsmanagerSecretVersion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  secret_id: str,
  id: str = None,
  region: str = None,
  secret_binary: str = None,
  secret_string: str = None,
  secret_string_wo: str = None,
  secret_string_wo_version: typing.Union[int, float] = None,
  version_stages: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.secretId">secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#secret_id SecretsmanagerSecretVersion#secret_id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#id SecretsmanagerSecretVersion#id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.secretBinary">secret_binary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#secret_binary SecretsmanagerSecretVersion#secret_binary}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.secretString">secret_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#secret_string SecretsmanagerSecretVersion#secret_string}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.secretStringWo">secret_string_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#secret_string_wo SecretsmanagerSecretVersion#secret_string_wo}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.secretStringWoVersion">secret_string_wo_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#secret_string_wo_version SecretsmanagerSecretVersion#secret_string_wo_version}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.versionStages">version_stages</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#version_stages SecretsmanagerSecretVersion#version_stages}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.secretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#secret_id SecretsmanagerSecretVersion#secret_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#id SecretsmanagerSecretVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#region SecretsmanagerSecretVersion#region}

---

##### `secret_binary`<sup>Optional</sup> <a name="secret_binary" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.secretBinary"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#secret_binary SecretsmanagerSecretVersion#secret_binary}.

---

##### `secret_string`<sup>Optional</sup> <a name="secret_string" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.secretString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#secret_string SecretsmanagerSecretVersion#secret_string}.

---

##### `secret_string_wo`<sup>Optional</sup> <a name="secret_string_wo" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.secretStringWo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#secret_string_wo SecretsmanagerSecretVersion#secret_string_wo}.

---

##### `secret_string_wo_version`<sup>Optional</sup> <a name="secret_string_wo_version" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.secretStringWoVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#secret_string_wo_version SecretsmanagerSecretVersion#secret_string_wo_version}.

---

##### `version_stages`<sup>Optional</sup> <a name="version_stages" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.Initializer.parameter.versionStages"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#version_stages SecretsmanagerSecretVersion#version_stages}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretBinary">reset_secret_binary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretString">reset_secret_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretStringWo">reset_secret_string_wo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretStringWoVersion">reset_secret_string_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetVersionStages">reset_version_stages</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_secret_binary` <a name="reset_secret_binary" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretBinary"></a>

```python
def reset_secret_binary() -> None
```

##### `reset_secret_string` <a name="reset_secret_string" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretString"></a>

```python
def reset_secret_string() -> None
```

##### `reset_secret_string_wo` <a name="reset_secret_string_wo" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretStringWo"></a>

```python
def reset_secret_string_wo() -> None
```

##### `reset_secret_string_wo_version` <a name="reset_secret_string_wo_version" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetSecretStringWoVersion"></a>

```python
def reset_secret_string_wo_version() -> None
```

##### `reset_version_stages` <a name="reset_version_stages" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.resetVersionStages"></a>

```python
def reset_version_stages() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SecretsmanagerSecretVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import secretsmanager_secret_version

secretsmanagerSecretVersion.SecretsmanagerSecretVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import secretsmanager_secret_version

secretsmanagerSecretVersion.SecretsmanagerSecretVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import secretsmanager_secret_version

secretsmanagerSecretVersion.SecretsmanagerSecretVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import secretsmanager_secret_version

secretsmanagerSecretVersion.SecretsmanagerSecretVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SecretsmanagerSecretVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecretsmanagerSecretVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecretsmanagerSecretVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecretsmanagerSecretVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.hasSecretStringWo">has_secret_string_wo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretBinaryInput">secret_binary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringInput">secret_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringWoInput">secret_string_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringWoVersionInput">secret_string_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.versionStagesInput">version_stages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretBinary">secret_binary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretString">secret_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringWo">secret_string_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringWoVersion">secret_string_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.versionStages">version_stages</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `has_secret_string_wo`<sup>Required</sup> <a name="has_secret_string_wo" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.hasSecretStringWo"></a>

```python
has_secret_string_wo: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `secret_binary_input`<sup>Optional</sup> <a name="secret_binary_input" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretBinaryInput"></a>

```python
secret_binary_input: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `secret_string_input`<sup>Optional</sup> <a name="secret_string_input" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringInput"></a>

```python
secret_string_input: str
```

- *Type:* str

---

##### `secret_string_wo_input`<sup>Optional</sup> <a name="secret_string_wo_input" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringWoInput"></a>

```python
secret_string_wo_input: str
```

- *Type:* str

---

##### `secret_string_wo_version_input`<sup>Optional</sup> <a name="secret_string_wo_version_input" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringWoVersionInput"></a>

```python
secret_string_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_stages_input`<sup>Optional</sup> <a name="version_stages_input" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.versionStagesInput"></a>

```python
version_stages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `secret_binary`<sup>Required</sup> <a name="secret_binary" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretBinary"></a>

```python
secret_binary: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `secret_string`<sup>Required</sup> <a name="secret_string" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretString"></a>

```python
secret_string: str
```

- *Type:* str

---

##### `secret_string_wo`<sup>Required</sup> <a name="secret_string_wo" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringWo"></a>

```python
secret_string_wo: str
```

- *Type:* str

---

##### `secret_string_wo_version`<sup>Required</sup> <a name="secret_string_wo_version" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.secretStringWoVersion"></a>

```python
secret_string_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `version_stages`<sup>Required</sup> <a name="version_stages" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.versionStages"></a>

```python
version_stages: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsmanagerSecretVersionConfig <a name="SecretsmanagerSecretVersionConfig" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import secretsmanager_secret_version

secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  secret_id: str,
  id: str = None,
  region: str = None,
  secret_binary: str = None,
  secret_string: str = None,
  secret_string_wo: str = None,
  secret_string_wo_version: typing.Union[int, float] = None,
  version_stages: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretId">secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#secret_id SecretsmanagerSecretVersion#secret_id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#id SecretsmanagerSecretVersion#id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretBinary">secret_binary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#secret_binary SecretsmanagerSecretVersion#secret_binary}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretString">secret_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#secret_string SecretsmanagerSecretVersion#secret_string}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretStringWo">secret_string_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#secret_string_wo SecretsmanagerSecretVersion#secret_string_wo}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretStringWoVersion">secret_string_wo_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#secret_string_wo_version SecretsmanagerSecretVersion#secret_string_wo_version}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.versionStages">version_stages</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#version_stages SecretsmanagerSecretVersion#version_stages}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#secret_id SecretsmanagerSecretVersion#secret_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#id SecretsmanagerSecretVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#region SecretsmanagerSecretVersion#region}

---

##### `secret_binary`<sup>Optional</sup> <a name="secret_binary" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretBinary"></a>

```python
secret_binary: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#secret_binary SecretsmanagerSecretVersion#secret_binary}.

---

##### `secret_string`<sup>Optional</sup> <a name="secret_string" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretString"></a>

```python
secret_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#secret_string SecretsmanagerSecretVersion#secret_string}.

---

##### `secret_string_wo`<sup>Optional</sup> <a name="secret_string_wo" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretStringWo"></a>

```python
secret_string_wo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#secret_string_wo SecretsmanagerSecretVersion#secret_string_wo}.

---

##### `secret_string_wo_version`<sup>Optional</sup> <a name="secret_string_wo_version" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.secretStringWoVersion"></a>

```python
secret_string_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#secret_string_wo_version SecretsmanagerSecretVersion#secret_string_wo_version}.

---

##### `version_stages`<sup>Optional</sup> <a name="version_stages" id="@cdktf/provider-aws.secretsmanagerSecretVersion.SecretsmanagerSecretVersionConfig.property.versionStages"></a>

```python
version_stages: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/secretsmanager_secret_version#version_stages SecretsmanagerSecretVersion#version_stages}.

---



