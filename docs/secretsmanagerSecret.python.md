# `secretsmanagerSecret` Submodule <a name="`secretsmanagerSecret` Submodule" id="@cdktf/provider-aws.secretsmanagerSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsmanagerSecret <a name="SecretsmanagerSecret" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret aws_secretsmanager_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import secretsmanager_secret

secretsmanagerSecret.SecretsmanagerSecret(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str = None,
  force_overwrite_replica_secret: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kms_key_id: str = None,
  name: str = None,
  name_prefix: str = None,
  policy: str = None,
  recovery_window_in_days: typing.Union[int, float] = None,
  replica: typing.Union[IResolvable, typing.List[SecretsmanagerSecretReplica]] = None,
  rotation_lambda_arn: str = None,
  rotation_rules: SecretsmanagerSecretRotationRules = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#description SecretsmanagerSecret#description}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.forceOverwriteReplicaSecret">force_overwrite_replica_secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#force_overwrite_replica_secret SecretsmanagerSecret#force_overwrite_replica_secret}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#id SecretsmanagerSecret#id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#name SecretsmanagerSecret#name}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#name_prefix SecretsmanagerSecret#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#policy SecretsmanagerSecret#policy}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.recoveryWindowInDays">recovery_window_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#recovery_window_in_days SecretsmanagerSecret#recovery_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.replica">replica</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>]]</code> | replica block. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.rotationLambdaArn">rotation_lambda_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#rotation_lambda_arn SecretsmanagerSecret#rotation_lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.rotationRules">rotation_rules</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules">SecretsmanagerSecretRotationRules</a></code> | rotation_rules block. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#tags SecretsmanagerSecret#tags}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#tags_all SecretsmanagerSecret#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#description SecretsmanagerSecret#description}.

---

##### `force_overwrite_replica_secret`<sup>Optional</sup> <a name="force_overwrite_replica_secret" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.forceOverwriteReplicaSecret"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#force_overwrite_replica_secret SecretsmanagerSecret#force_overwrite_replica_secret}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#id SecretsmanagerSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#name SecretsmanagerSecret#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#name_prefix SecretsmanagerSecret#name_prefix}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.policy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#policy SecretsmanagerSecret#policy}.

---

##### `recovery_window_in_days`<sup>Optional</sup> <a name="recovery_window_in_days" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.recoveryWindowInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#recovery_window_in_days SecretsmanagerSecret#recovery_window_in_days}.

---

##### `replica`<sup>Optional</sup> <a name="replica" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.replica"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>]]

replica block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#replica SecretsmanagerSecret#replica}

---

##### `rotation_lambda_arn`<sup>Optional</sup> <a name="rotation_lambda_arn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.rotationLambdaArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#rotation_lambda_arn SecretsmanagerSecret#rotation_lambda_arn}.

---

##### `rotation_rules`<sup>Optional</sup> <a name="rotation_rules" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.rotationRules"></a>

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules">SecretsmanagerSecretRotationRules</a>

rotation_rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#rotation_rules SecretsmanagerSecret#rotation_rules}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#tags SecretsmanagerSecret#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#tags_all SecretsmanagerSecret#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.putReplica">put_replica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.putRotationRules">put_rotation_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetForceOverwriteReplicaSecret">reset_force_overwrite_replica_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetPolicy">reset_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetRecoveryWindowInDays">reset_recovery_window_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetReplica">reset_replica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetRotationLambdaArn">reset_rotation_lambda_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetRotationRules">reset_rotation_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_replica` <a name="put_replica" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.putReplica"></a>

```python
def put_replica(
  value: typing.Union[IResolvable, typing.List[SecretsmanagerSecretReplica]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.putReplica.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>]]

---

##### `put_rotation_rules` <a name="put_rotation_rules" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.putRotationRules"></a>

```python
def put_rotation_rules(
  automatically_after_days: typing.Union[int, float]
) -> None
```

###### `automatically_after_days`<sup>Required</sup> <a name="automatically_after_days" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.putRotationRules.parameter.automaticallyAfterDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#automatically_after_days SecretsmanagerSecret#automatically_after_days}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_force_overwrite_replica_secret` <a name="reset_force_overwrite_replica_secret" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetForceOverwriteReplicaSecret"></a>

```python
def reset_force_overwrite_replica_secret() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_policy` <a name="reset_policy" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetPolicy"></a>

```python
def reset_policy() -> None
```

##### `reset_recovery_window_in_days` <a name="reset_recovery_window_in_days" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetRecoveryWindowInDays"></a>

```python
def reset_recovery_window_in_days() -> None
```

##### `reset_replica` <a name="reset_replica" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetReplica"></a>

```python
def reset_replica() -> None
```

##### `reset_rotation_lambda_arn` <a name="reset_rotation_lambda_arn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetRotationLambdaArn"></a>

```python
def reset_rotation_lambda_arn() -> None
```

##### `reset_rotation_rules` <a name="reset_rotation_rules" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetRotationRules"></a>

```python
def reset_rotation_rules() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import secretsmanager_secret

secretsmanagerSecret.SecretsmanagerSecret.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import secretsmanager_secret

secretsmanagerSecret.SecretsmanagerSecret.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import secretsmanager_secret

secretsmanagerSecret.SecretsmanagerSecret.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.replica">replica</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList">SecretsmanagerSecretReplicaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationEnabled">rotation_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationRules">rotation_rules</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference">SecretsmanagerSecretRotationRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.forceOverwriteReplicaSecretInput">force_overwrite_replica_secret_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.recoveryWindowInDaysInput">recovery_window_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.replicaInput">replica_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationLambdaArnInput">rotation_lambda_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationRulesInput">rotation_rules_input</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules">SecretsmanagerSecretRotationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.forceOverwriteReplicaSecret">force_overwrite_replica_secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.recoveryWindowInDays">recovery_window_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationLambdaArn">rotation_lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `replica`<sup>Required</sup> <a name="replica" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.replica"></a>

```python
replica: SecretsmanagerSecretReplicaList
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList">SecretsmanagerSecretReplicaList</a>

---

##### `rotation_enabled`<sup>Required</sup> <a name="rotation_enabled" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationEnabled"></a>

```python
rotation_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `rotation_rules`<sup>Required</sup> <a name="rotation_rules" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationRules"></a>

```python
rotation_rules: SecretsmanagerSecretRotationRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference">SecretsmanagerSecretRotationRulesOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `force_overwrite_replica_secret_input`<sup>Optional</sup> <a name="force_overwrite_replica_secret_input" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.forceOverwriteReplicaSecretInput"></a>

```python
force_overwrite_replica_secret_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `recovery_window_in_days_input`<sup>Optional</sup> <a name="recovery_window_in_days_input" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.recoveryWindowInDaysInput"></a>

```python
recovery_window_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replica_input`<sup>Optional</sup> <a name="replica_input" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.replicaInput"></a>

```python
replica_input: typing.Union[IResolvable, typing.List[SecretsmanagerSecretReplica]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>]]

---

##### `rotation_lambda_arn_input`<sup>Optional</sup> <a name="rotation_lambda_arn_input" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationLambdaArnInput"></a>

```python
rotation_lambda_arn_input: str
```

- *Type:* str

---

##### `rotation_rules_input`<sup>Optional</sup> <a name="rotation_rules_input" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationRulesInput"></a>

```python
rotation_rules_input: SecretsmanagerSecretRotationRules
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules">SecretsmanagerSecretRotationRules</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `force_overwrite_replica_secret`<sup>Required</sup> <a name="force_overwrite_replica_secret" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.forceOverwriteReplicaSecret"></a>

```python
force_overwrite_replica_secret: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `recovery_window_in_days`<sup>Required</sup> <a name="recovery_window_in_days" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.recoveryWindowInDays"></a>

```python
recovery_window_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rotation_lambda_arn`<sup>Required</sup> <a name="rotation_lambda_arn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.rotationLambdaArn"></a>

```python
rotation_lambda_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecret.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsmanagerSecretConfig <a name="SecretsmanagerSecretConfig" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import secretsmanager_secret

secretsmanagerSecret.SecretsmanagerSecretConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str = None,
  force_overwrite_replica_secret: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kms_key_id: str = None,
  name: str = None,
  name_prefix: str = None,
  policy: str = None,
  recovery_window_in_days: typing.Union[int, float] = None,
  replica: typing.Union[IResolvable, typing.List[SecretsmanagerSecretReplica]] = None,
  rotation_lambda_arn: str = None,
  rotation_rules: SecretsmanagerSecretRotationRules = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#description SecretsmanagerSecret#description}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.forceOverwriteReplicaSecret">force_overwrite_replica_secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#force_overwrite_replica_secret SecretsmanagerSecret#force_overwrite_replica_secret}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#id SecretsmanagerSecret#id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#name SecretsmanagerSecret#name}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#name_prefix SecretsmanagerSecret#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#policy SecretsmanagerSecret#policy}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.recoveryWindowInDays">recovery_window_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#recovery_window_in_days SecretsmanagerSecret#recovery_window_in_days}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.replica">replica</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>]]</code> | replica block. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.rotationLambdaArn">rotation_lambda_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#rotation_lambda_arn SecretsmanagerSecret#rotation_lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.rotationRules">rotation_rules</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules">SecretsmanagerSecretRotationRules</a></code> | rotation_rules block. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#tags SecretsmanagerSecret#tags}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#tags_all SecretsmanagerSecret#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#description SecretsmanagerSecret#description}.

---

##### `force_overwrite_replica_secret`<sup>Optional</sup> <a name="force_overwrite_replica_secret" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.forceOverwriteReplicaSecret"></a>

```python
force_overwrite_replica_secret: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#force_overwrite_replica_secret SecretsmanagerSecret#force_overwrite_replica_secret}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#id SecretsmanagerSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#name SecretsmanagerSecret#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#name_prefix SecretsmanagerSecret#name_prefix}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.policy"></a>

```python
policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#policy SecretsmanagerSecret#policy}.

---

##### `recovery_window_in_days`<sup>Optional</sup> <a name="recovery_window_in_days" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.recoveryWindowInDays"></a>

```python
recovery_window_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#recovery_window_in_days SecretsmanagerSecret#recovery_window_in_days}.

---

##### `replica`<sup>Optional</sup> <a name="replica" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.replica"></a>

```python
replica: typing.Union[IResolvable, typing.List[SecretsmanagerSecretReplica]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>]]

replica block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#replica SecretsmanagerSecret#replica}

---

##### `rotation_lambda_arn`<sup>Optional</sup> <a name="rotation_lambda_arn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.rotationLambdaArn"></a>

```python
rotation_lambda_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#rotation_lambda_arn SecretsmanagerSecret#rotation_lambda_arn}.

---

##### `rotation_rules`<sup>Optional</sup> <a name="rotation_rules" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.rotationRules"></a>

```python
rotation_rules: SecretsmanagerSecretRotationRules
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules">SecretsmanagerSecretRotationRules</a>

rotation_rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#rotation_rules SecretsmanagerSecret#rotation_rules}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#tags SecretsmanagerSecret#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#tags_all SecretsmanagerSecret#tags_all}.

---

### SecretsmanagerSecretReplica <a name="SecretsmanagerSecretReplica" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import secretsmanager_secret

secretsmanagerSecret.SecretsmanagerSecretReplica(
  region: str,
  kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#region SecretsmanagerSecret#region}. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#region SecretsmanagerSecret#region}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}.

---

### SecretsmanagerSecretRotationRules <a name="SecretsmanagerSecretRotationRules" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import secretsmanager_secret

secretsmanagerSecret.SecretsmanagerSecretRotationRules(
  automatically_after_days: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules.property.automaticallyAfterDays">automatically_after_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#automatically_after_days SecretsmanagerSecret#automatically_after_days}. |

---

##### `automatically_after_days`<sup>Required</sup> <a name="automatically_after_days" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules.property.automaticallyAfterDays"></a>

```python
automatically_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret#automatically_after_days SecretsmanagerSecret#automatically_after_days}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecretsmanagerSecretReplicaList <a name="SecretsmanagerSecretReplicaList" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import secretsmanager_secret

secretsmanagerSecret.SecretsmanagerSecretReplicaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecretsmanagerSecretReplicaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SecretsmanagerSecretReplica]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>]]

---


### SecretsmanagerSecretReplicaOutputReference <a name="SecretsmanagerSecretReplicaOutputReference" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import secretsmanager_secret

secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.lastAccessedDate">last_accessed_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_accessed_date`<sup>Required</sup> <a name="last_accessed_date" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.lastAccessedDate"></a>

```python
last_accessed_date: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplicaOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SecretsmanagerSecretReplica, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretReplica">SecretsmanagerSecretReplica</a>, cdktf.IResolvable]

---


### SecretsmanagerSecretRotationRulesOutputReference <a name="SecretsmanagerSecretRotationRulesOutputReference" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import secretsmanager_secret

secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.automaticallyAfterDaysInput">automatically_after_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.automaticallyAfterDays">automatically_after_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules">SecretsmanagerSecretRotationRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automatically_after_days_input`<sup>Optional</sup> <a name="automatically_after_days_input" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.automaticallyAfterDaysInput"></a>

```python
automatically_after_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `automatically_after_days`<sup>Required</sup> <a name="automatically_after_days" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.automaticallyAfterDays"></a>

```python
automatically_after_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRulesOutputReference.property.internalValue"></a>

```python
internal_value: SecretsmanagerSecretRotationRules
```

- *Type:* <a href="#@cdktf/provider-aws.secretsmanagerSecret.SecretsmanagerSecretRotationRules">SecretsmanagerSecretRotationRules</a>

---



