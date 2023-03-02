# `backupVaultLockConfiguration` Submodule <a name="`backupVaultLockConfiguration` Submodule" id="@cdktf/provider-aws.backupVaultLockConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupVaultLockConfiguration <a name="BackupVaultLockConfiguration" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration aws_backup_vault_lock_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import backup_vault_lock_configuration

backupVaultLockConfiguration.BackupVaultLockConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_vault_name: str,
  changeable_for_days: typing.Union[int, float] = None,
  id: str = None,
  max_retention_days: typing.Union[int, float] = None,
  min_retention_days: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.backupVaultName">backup_vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#backup_vault_name BackupVaultLockConfiguration#backup_vault_name}. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.changeableForDays">changeable_for_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#changeable_for_days BackupVaultLockConfiguration#changeable_for_days}. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#id BackupVaultLockConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.maxRetentionDays">max_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#max_retention_days BackupVaultLockConfiguration#max_retention_days}. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.minRetentionDays">min_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#min_retention_days BackupVaultLockConfiguration#min_retention_days}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_vault_name`<sup>Required</sup> <a name="backup_vault_name" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.backupVaultName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#backup_vault_name BackupVaultLockConfiguration#backup_vault_name}.

---

##### `changeable_for_days`<sup>Optional</sup> <a name="changeable_for_days" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.changeableForDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#changeable_for_days BackupVaultLockConfiguration#changeable_for_days}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#id BackupVaultLockConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_retention_days`<sup>Optional</sup> <a name="max_retention_days" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.maxRetentionDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#max_retention_days BackupVaultLockConfiguration#max_retention_days}.

---

##### `min_retention_days`<sup>Optional</sup> <a name="min_retention_days" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.Initializer.parameter.minRetentionDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#min_retention_days BackupVaultLockConfiguration#min_retention_days}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.resetChangeableForDays">reset_changeable_for_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.resetMaxRetentionDays">reset_max_retention_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.resetMinRetentionDays">reset_min_retention_days</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_changeable_for_days` <a name="reset_changeable_for_days" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.resetChangeableForDays"></a>

```python
def reset_changeable_for_days() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_retention_days` <a name="reset_max_retention_days" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.resetMaxRetentionDays"></a>

```python
def reset_max_retention_days() -> None
```

##### `reset_min_retention_days` <a name="reset_min_retention_days" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.resetMinRetentionDays"></a>

```python
def reset_min_retention_days() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import backup_vault_lock_configuration

backupVaultLockConfiguration.BackupVaultLockConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import backup_vault_lock_configuration

backupVaultLockConfiguration.BackupVaultLockConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import backup_vault_lock_configuration

backupVaultLockConfiguration.BackupVaultLockConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.backupVaultArn">backup_vault_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.backupVaultNameInput">backup_vault_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.changeableForDaysInput">changeable_for_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.maxRetentionDaysInput">max_retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.minRetentionDaysInput">min_retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.backupVaultName">backup_vault_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.changeableForDays">changeable_for_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.maxRetentionDays">max_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.minRetentionDays">min_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_vault_arn`<sup>Required</sup> <a name="backup_vault_arn" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.backupVaultArn"></a>

```python
backup_vault_arn: str
```

- *Type:* str

---

##### `backup_vault_name_input`<sup>Optional</sup> <a name="backup_vault_name_input" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.backupVaultNameInput"></a>

```python
backup_vault_name_input: str
```

- *Type:* str

---

##### `changeable_for_days_input`<sup>Optional</sup> <a name="changeable_for_days_input" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.changeableForDaysInput"></a>

```python
changeable_for_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_retention_days_input`<sup>Optional</sup> <a name="max_retention_days_input" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.maxRetentionDaysInput"></a>

```python
max_retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_retention_days_input`<sup>Optional</sup> <a name="min_retention_days_input" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.minRetentionDaysInput"></a>

```python
min_retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_vault_name`<sup>Required</sup> <a name="backup_vault_name" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.backupVaultName"></a>

```python
backup_vault_name: str
```

- *Type:* str

---

##### `changeable_for_days`<sup>Required</sup> <a name="changeable_for_days" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.changeableForDays"></a>

```python
changeable_for_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_retention_days`<sup>Required</sup> <a name="max_retention_days" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.maxRetentionDays"></a>

```python
max_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_retention_days`<sup>Required</sup> <a name="min_retention_days" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.minRetentionDays"></a>

```python
min_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BackupVaultLockConfigurationConfig <a name="BackupVaultLockConfigurationConfig" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import backup_vault_lock_configuration

backupVaultLockConfiguration.BackupVaultLockConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_vault_name: str,
  changeable_for_days: typing.Union[int, float] = None,
  id: str = None,
  max_retention_days: typing.Union[int, float] = None,
  min_retention_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.backupVaultName">backup_vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#backup_vault_name BackupVaultLockConfiguration#backup_vault_name}. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.changeableForDays">changeable_for_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#changeable_for_days BackupVaultLockConfiguration#changeable_for_days}. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#id BackupVaultLockConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.maxRetentionDays">max_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#max_retention_days BackupVaultLockConfiguration#max_retention_days}. |
| <code><a href="#@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.minRetentionDays">min_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#min_retention_days BackupVaultLockConfiguration#min_retention_days}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_vault_name`<sup>Required</sup> <a name="backup_vault_name" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.backupVaultName"></a>

```python
backup_vault_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#backup_vault_name BackupVaultLockConfiguration#backup_vault_name}.

---

##### `changeable_for_days`<sup>Optional</sup> <a name="changeable_for_days" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.changeableForDays"></a>

```python
changeable_for_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#changeable_for_days BackupVaultLockConfiguration#changeable_for_days}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#id BackupVaultLockConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_retention_days`<sup>Optional</sup> <a name="max_retention_days" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.maxRetentionDays"></a>

```python
max_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#max_retention_days BackupVaultLockConfiguration#max_retention_days}.

---

##### `min_retention_days`<sup>Optional</sup> <a name="min_retention_days" id="@cdktf/provider-aws.backupVaultLockConfiguration.BackupVaultLockConfigurationConfig.property.minRetentionDays"></a>

```python
min_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_vault_lock_configuration#min_retention_days BackupVaultLockConfiguration#min_retention_days}.

---



