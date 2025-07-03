# `workspaceswebBrowserSettings` Submodule <a name="`workspaceswebBrowserSettings` Submodule" id="@cdktf/provider-aws.workspaceswebBrowserSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebBrowserSettings <a name="WorkspaceswebBrowserSettings" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_browser_settings aws_workspacesweb_browser_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_browser_settings

workspaceswebBrowserSettings.WorkspaceswebBrowserSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  browser_policy: str,
  additional_encryption_context: typing.Mapping[str] = None,
  customer_managed_key: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.browserPolicy">browser_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_browser_settings#browser_policy WorkspaceswebBrowserSettings#browser_policy}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_browser_settings#additional_encryption_context WorkspaceswebBrowserSettings#additional_encryption_context}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_browser_settings#customer_managed_key WorkspaceswebBrowserSettings#customer_managed_key}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_browser_settings#tags WorkspaceswebBrowserSettings#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `browser_policy`<sup>Required</sup> <a name="browser_policy" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.browserPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_browser_settings#browser_policy WorkspaceswebBrowserSettings#browser_policy}.

---

##### `additional_encryption_context`<sup>Optional</sup> <a name="additional_encryption_context" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.additionalEncryptionContext"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_browser_settings#additional_encryption_context WorkspaceswebBrowserSettings#additional_encryption_context}.

---

##### `customer_managed_key`<sup>Optional</sup> <a name="customer_managed_key" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.customerManagedKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_browser_settings#customer_managed_key WorkspaceswebBrowserSettings#customer_managed_key}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_browser_settings#region WorkspaceswebBrowserSettings#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_browser_settings#tags WorkspaceswebBrowserSettings#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetAdditionalEncryptionContext">reset_additional_encryption_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetCustomerManagedKey">reset_customer_managed_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_additional_encryption_context` <a name="reset_additional_encryption_context" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetAdditionalEncryptionContext"></a>

```python
def reset_additional_encryption_context() -> None
```

##### `reset_customer_managed_key` <a name="reset_customer_managed_key" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetCustomerManagedKey"></a>

```python
def reset_customer_managed_key() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WorkspaceswebBrowserSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_browser_settings

workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_browser_settings

workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_browser_settings

workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_browser_settings

workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WorkspaceswebBrowserSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkspaceswebBrowserSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkspaceswebBrowserSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_browser_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceswebBrowserSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.associatedPortalArns">associated_portal_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.browserSettingsArn">browser_settings_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.additionalEncryptionContextInput">additional_encryption_context_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.browserPolicyInput">browser_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.customerManagedKeyInput">customer_managed_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.browserPolicy">browser_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `associated_portal_arns`<sup>Required</sup> <a name="associated_portal_arns" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.associatedPortalArns"></a>

```python
associated_portal_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `browser_settings_arn`<sup>Required</sup> <a name="browser_settings_arn" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.browserSettingsArn"></a>

```python
browser_settings_arn: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `additional_encryption_context_input`<sup>Optional</sup> <a name="additional_encryption_context_input" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.additionalEncryptionContextInput"></a>

```python
additional_encryption_context_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `browser_policy_input`<sup>Optional</sup> <a name="browser_policy_input" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.browserPolicyInput"></a>

```python
browser_policy_input: str
```

- *Type:* str

---

##### `customer_managed_key_input`<sup>Optional</sup> <a name="customer_managed_key_input" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.customerManagedKeyInput"></a>

```python
customer_managed_key_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `additional_encryption_context`<sup>Required</sup> <a name="additional_encryption_context" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.additionalEncryptionContext"></a>

```python
additional_encryption_context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `browser_policy`<sup>Required</sup> <a name="browser_policy" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.browserPolicy"></a>

```python
browser_policy: str
```

- *Type:* str

---

##### `customer_managed_key`<sup>Required</sup> <a name="customer_managed_key" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.customerManagedKey"></a>

```python
customer_managed_key: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebBrowserSettingsConfig <a name="WorkspaceswebBrowserSettingsConfig" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_browser_settings

workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  browser_policy: str,
  additional_encryption_context: typing.Mapping[str] = None,
  customer_managed_key: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.browserPolicy">browser_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_browser_settings#browser_policy WorkspaceswebBrowserSettings#browser_policy}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_browser_settings#additional_encryption_context WorkspaceswebBrowserSettings#additional_encryption_context}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_browser_settings#customer_managed_key WorkspaceswebBrowserSettings#customer_managed_key}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_browser_settings#tags WorkspaceswebBrowserSettings#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `browser_policy`<sup>Required</sup> <a name="browser_policy" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.browserPolicy"></a>

```python
browser_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_browser_settings#browser_policy WorkspaceswebBrowserSettings#browser_policy}.

---

##### `additional_encryption_context`<sup>Optional</sup> <a name="additional_encryption_context" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.additionalEncryptionContext"></a>

```python
additional_encryption_context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_browser_settings#additional_encryption_context WorkspaceswebBrowserSettings#additional_encryption_context}.

---

##### `customer_managed_key`<sup>Optional</sup> <a name="customer_managed_key" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.customerManagedKey"></a>

```python
customer_managed_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_browser_settings#customer_managed_key WorkspaceswebBrowserSettings#customer_managed_key}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_browser_settings#region WorkspaceswebBrowserSettings#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.workspaceswebBrowserSettings.WorkspaceswebBrowserSettingsConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_browser_settings#tags WorkspaceswebBrowserSettings#tags}.

---



