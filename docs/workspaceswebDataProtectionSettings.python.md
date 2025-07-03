# `workspaceswebDataProtectionSettings` Submodule <a name="`workspaceswebDataProtectionSettings` Submodule" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebDataProtectionSettings <a name="WorkspaceswebDataProtectionSettings" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings aws_workspacesweb_data_protection_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_data_protection_settings

workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  additional_encryption_context: typing.Mapping[str] = None,
  customer_managed_key: str = None,
  description: str = None,
  inline_redaction_configuration: typing.Union[IResolvable, typing.List[WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration]] = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#display_name WorkspaceswebDataProtectionSettings#display_name}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#additional_encryption_context WorkspaceswebDataProtectionSettings#additional_encryption_context}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#customer_managed_key WorkspaceswebDataProtectionSettings#customer_managed_key}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#description WorkspaceswebDataProtectionSettings#description}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.inlineRedactionConfiguration">inline_redaction_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration">WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration</a>]]</code> | inline_redaction_configuration block. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#tags WorkspaceswebDataProtectionSettings#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#display_name WorkspaceswebDataProtectionSettings#display_name}.

---

##### `additional_encryption_context`<sup>Optional</sup> <a name="additional_encryption_context" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.additionalEncryptionContext"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#additional_encryption_context WorkspaceswebDataProtectionSettings#additional_encryption_context}.

---

##### `customer_managed_key`<sup>Optional</sup> <a name="customer_managed_key" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.customerManagedKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#customer_managed_key WorkspaceswebDataProtectionSettings#customer_managed_key}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#description WorkspaceswebDataProtectionSettings#description}.

---

##### `inline_redaction_configuration`<sup>Optional</sup> <a name="inline_redaction_configuration" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.inlineRedactionConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration">WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration</a>]]

inline_redaction_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#inline_redaction_configuration WorkspaceswebDataProtectionSettings#inline_redaction_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#region WorkspaceswebDataProtectionSettings#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#tags WorkspaceswebDataProtectionSettings#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.putInlineRedactionConfiguration">put_inline_redaction_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetAdditionalEncryptionContext">reset_additional_encryption_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetCustomerManagedKey">reset_customer_managed_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetInlineRedactionConfiguration">reset_inline_redaction_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_inline_redaction_configuration` <a name="put_inline_redaction_configuration" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.putInlineRedactionConfiguration"></a>

```python
def put_inline_redaction_configuration(
  value: typing.Union[IResolvable, typing.List[WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.putInlineRedactionConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration">WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration</a>]]

---

##### `reset_additional_encryption_context` <a name="reset_additional_encryption_context" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetAdditionalEncryptionContext"></a>

```python
def reset_additional_encryption_context() -> None
```

##### `reset_customer_managed_key` <a name="reset_customer_managed_key" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetCustomerManagedKey"></a>

```python
def reset_customer_managed_key() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_inline_redaction_configuration` <a name="reset_inline_redaction_configuration" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetInlineRedactionConfiguration"></a>

```python
def reset_inline_redaction_configuration() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WorkspaceswebDataProtectionSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_data_protection_settings

workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_data_protection_settings

workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_data_protection_settings

workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_data_protection_settings

workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WorkspaceswebDataProtectionSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkspaceswebDataProtectionSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkspaceswebDataProtectionSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceswebDataProtectionSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.associatedPortalArns">associated_portal_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.dataProtectionSettingsArn">data_protection_settings_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.inlineRedactionConfiguration">inline_redaction_configuration</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.additionalEncryptionContextInput">additional_encryption_context_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.customerManagedKeyInput">customer_managed_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.inlineRedactionConfigurationInput">inline_redaction_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration">WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `associated_portal_arns`<sup>Required</sup> <a name="associated_portal_arns" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.associatedPortalArns"></a>

```python
associated_portal_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `data_protection_settings_arn`<sup>Required</sup> <a name="data_protection_settings_arn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.dataProtectionSettingsArn"></a>

```python
data_protection_settings_arn: str
```

- *Type:* str

---

##### `inline_redaction_configuration`<sup>Required</sup> <a name="inline_redaction_configuration" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.inlineRedactionConfiguration"></a>

```python
inline_redaction_configuration: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `additional_encryption_context_input`<sup>Optional</sup> <a name="additional_encryption_context_input" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.additionalEncryptionContextInput"></a>

```python
additional_encryption_context_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `customer_managed_key_input`<sup>Optional</sup> <a name="customer_managed_key_input" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.customerManagedKeyInput"></a>

```python
customer_managed_key_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `inline_redaction_configuration_input`<sup>Optional</sup> <a name="inline_redaction_configuration_input" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.inlineRedactionConfigurationInput"></a>

```python
inline_redaction_configuration_input: typing.Union[IResolvable, typing.List[WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration">WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration</a>]]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `additional_encryption_context`<sup>Required</sup> <a name="additional_encryption_context" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.additionalEncryptionContext"></a>

```python
additional_encryption_context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `customer_managed_key`<sup>Required</sup> <a name="customer_managed_key" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.customerManagedKey"></a>

```python
customer_managed_key: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebDataProtectionSettingsConfig <a name="WorkspaceswebDataProtectionSettingsConfig" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_data_protection_settings

workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  additional_encryption_context: typing.Mapping[str] = None,
  customer_managed_key: str = None,
  description: str = None,
  inline_redaction_configuration: typing.Union[IResolvable, typing.List[WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration]] = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#display_name WorkspaceswebDataProtectionSettings#display_name}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.additionalEncryptionContext">additional_encryption_context</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#additional_encryption_context WorkspaceswebDataProtectionSettings#additional_encryption_context}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.customerManagedKey">customer_managed_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#customer_managed_key WorkspaceswebDataProtectionSettings#customer_managed_key}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#description WorkspaceswebDataProtectionSettings#description}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.inlineRedactionConfiguration">inline_redaction_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration">WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration</a>]]</code> | inline_redaction_configuration block. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#tags WorkspaceswebDataProtectionSettings#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#display_name WorkspaceswebDataProtectionSettings#display_name}.

---

##### `additional_encryption_context`<sup>Optional</sup> <a name="additional_encryption_context" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.additionalEncryptionContext"></a>

```python
additional_encryption_context: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#additional_encryption_context WorkspaceswebDataProtectionSettings#additional_encryption_context}.

---

##### `customer_managed_key`<sup>Optional</sup> <a name="customer_managed_key" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.customerManagedKey"></a>

```python
customer_managed_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#customer_managed_key WorkspaceswebDataProtectionSettings#customer_managed_key}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#description WorkspaceswebDataProtectionSettings#description}.

---

##### `inline_redaction_configuration`<sup>Optional</sup> <a name="inline_redaction_configuration" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.inlineRedactionConfiguration"></a>

```python
inline_redaction_configuration: typing.Union[IResolvable, typing.List[WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration">WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration</a>]]

inline_redaction_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#inline_redaction_configuration WorkspaceswebDataProtectionSettings#inline_redaction_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#region WorkspaceswebDataProtectionSettings#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#tags WorkspaceswebDataProtectionSettings#tags}.

---

### WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_data_protection_settings

workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration(
  global_confidence_level: typing.Union[int, float] = None,
  global_enforced_urls: typing.List[str] = None,
  global_exempt_urls: typing.List[str] = None,
  inline_redaction_pattern: typing.Union[IResolvable, typing.List[WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.property.globalConfidenceLevel">global_confidence_level</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#global_confidence_level WorkspaceswebDataProtectionSettings#global_confidence_level}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.property.globalEnforcedUrls">global_enforced_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#global_enforced_urls WorkspaceswebDataProtectionSettings#global_enforced_urls}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.property.globalExemptUrls">global_exempt_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#global_exempt_urls WorkspaceswebDataProtectionSettings#global_exempt_urls}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.property.inlineRedactionPattern">inline_redaction_pattern</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern</a>]]</code> | inline_redaction_pattern block. |

---

##### `global_confidence_level`<sup>Optional</sup> <a name="global_confidence_level" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.property.globalConfidenceLevel"></a>

```python
global_confidence_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#global_confidence_level WorkspaceswebDataProtectionSettings#global_confidence_level}.

---

##### `global_enforced_urls`<sup>Optional</sup> <a name="global_enforced_urls" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.property.globalEnforcedUrls"></a>

```python
global_enforced_urls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#global_enforced_urls WorkspaceswebDataProtectionSettings#global_enforced_urls}.

---

##### `global_exempt_urls`<sup>Optional</sup> <a name="global_exempt_urls" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.property.globalExemptUrls"></a>

```python
global_exempt_urls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#global_exempt_urls WorkspaceswebDataProtectionSettings#global_exempt_urls}.

---

##### `inline_redaction_pattern`<sup>Optional</sup> <a name="inline_redaction_pattern" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration.property.inlineRedactionPattern"></a>

```python
inline_redaction_pattern: typing.Union[IResolvable, typing.List[WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern</a>]]

inline_redaction_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#inline_redaction_pattern WorkspaceswebDataProtectionSettings#inline_redaction_pattern}

---

### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_data_protection_settings

workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern(
  built_in_pattern_id: str = None,
  confidence_level: typing.Union[int, float] = None,
  custom_pattern: typing.Union[IResolvable, typing.List[WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern]] = None,
  enforced_urls: typing.List[str] = None,
  exempt_urls: typing.List[str] = None,
  redaction_place_holder: typing.Union[IResolvable, typing.List[WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.property.builtInPatternId">built_in_pattern_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#built_in_pattern_id WorkspaceswebDataProtectionSettings#built_in_pattern_id}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.property.confidenceLevel">confidence_level</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#confidence_level WorkspaceswebDataProtectionSettings#confidence_level}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.property.customPattern">custom_pattern</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern</a>]]</code> | custom_pattern block. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.property.enforcedUrls">enforced_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#enforced_urls WorkspaceswebDataProtectionSettings#enforced_urls}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.property.exemptUrls">exempt_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#exempt_urls WorkspaceswebDataProtectionSettings#exempt_urls}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.property.redactionPlaceHolder">redaction_place_holder</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder</a>]]</code> | redaction_place_holder block. |

---

##### `built_in_pattern_id`<sup>Optional</sup> <a name="built_in_pattern_id" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.property.builtInPatternId"></a>

```python
built_in_pattern_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#built_in_pattern_id WorkspaceswebDataProtectionSettings#built_in_pattern_id}.

---

##### `confidence_level`<sup>Optional</sup> <a name="confidence_level" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.property.confidenceLevel"></a>

```python
confidence_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#confidence_level WorkspaceswebDataProtectionSettings#confidence_level}.

---

##### `custom_pattern`<sup>Optional</sup> <a name="custom_pattern" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.property.customPattern"></a>

```python
custom_pattern: typing.Union[IResolvable, typing.List[WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern</a>]]

custom_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#custom_pattern WorkspaceswebDataProtectionSettings#custom_pattern}

---

##### `enforced_urls`<sup>Optional</sup> <a name="enforced_urls" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.property.enforcedUrls"></a>

```python
enforced_urls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#enforced_urls WorkspaceswebDataProtectionSettings#enforced_urls}.

---

##### `exempt_urls`<sup>Optional</sup> <a name="exempt_urls" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.property.exemptUrls"></a>

```python
exempt_urls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#exempt_urls WorkspaceswebDataProtectionSettings#exempt_urls}.

---

##### `redaction_place_holder`<sup>Optional</sup> <a name="redaction_place_holder" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern.property.redactionPlaceHolder"></a>

```python
redaction_place_holder: typing.Union[IResolvable, typing.List[WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder</a>]]

redaction_place_holder block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#redaction_place_holder WorkspaceswebDataProtectionSettings#redaction_place_holder}

---

### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_data_protection_settings

workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern(
  pattern_name: str,
  pattern_regex: str,
  keyword_regex: str = None,
  pattern_description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern.property.patternName">pattern_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#pattern_name WorkspaceswebDataProtectionSettings#pattern_name}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern.property.patternRegex">pattern_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#pattern_regex WorkspaceswebDataProtectionSettings#pattern_regex}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern.property.keywordRegex">keyword_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#keyword_regex WorkspaceswebDataProtectionSettings#keyword_regex}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern.property.patternDescription">pattern_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#pattern_description WorkspaceswebDataProtectionSettings#pattern_description}. |

---

##### `pattern_name`<sup>Required</sup> <a name="pattern_name" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern.property.patternName"></a>

```python
pattern_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#pattern_name WorkspaceswebDataProtectionSettings#pattern_name}.

---

##### `pattern_regex`<sup>Required</sup> <a name="pattern_regex" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern.property.patternRegex"></a>

```python
pattern_regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#pattern_regex WorkspaceswebDataProtectionSettings#pattern_regex}.

---

##### `keyword_regex`<sup>Optional</sup> <a name="keyword_regex" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern.property.keywordRegex"></a>

```python
keyword_regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#keyword_regex WorkspaceswebDataProtectionSettings#keyword_regex}.

---

##### `pattern_description`<sup>Optional</sup> <a name="pattern_description" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern.property.patternDescription"></a>

```python
pattern_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#pattern_description WorkspaceswebDataProtectionSettings#pattern_description}.

---

### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_data_protection_settings

workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder(
  redaction_place_holder_type: str,
  redaction_place_holder_text: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder.property.redactionPlaceHolderType">redaction_place_holder_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#redaction_place_holder_type WorkspaceswebDataProtectionSettings#redaction_place_holder_type}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder.property.redactionPlaceHolderText">redaction_place_holder_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#redaction_place_holder_text WorkspaceswebDataProtectionSettings#redaction_place_holder_text}. |

---

##### `redaction_place_holder_type`<sup>Required</sup> <a name="redaction_place_holder_type" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder.property.redactionPlaceHolderType"></a>

```python
redaction_place_holder_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#redaction_place_holder_type WorkspaceswebDataProtectionSettings#redaction_place_holder_type}.

---

##### `redaction_place_holder_text`<sup>Optional</sup> <a name="redaction_place_holder_text" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder.property.redactionPlaceHolderText"></a>

```python
redaction_place_holder_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/workspacesweb_data_protection_settings#redaction_place_holder_text WorkspaceswebDataProtectionSettings#redaction_place_holder_text}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_data_protection_settings

workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern</a>]]

---


### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_data_protection_settings

workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.resetKeywordRegex">reset_keyword_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.resetPatternDescription">reset_pattern_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_keyword_regex` <a name="reset_keyword_regex" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.resetKeywordRegex"></a>

```python
def reset_keyword_regex() -> None
```

##### `reset_pattern_description` <a name="reset_pattern_description" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.resetPatternDescription"></a>

```python
def reset_pattern_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.keywordRegexInput">keyword_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.patternDescriptionInput">pattern_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.patternNameInput">pattern_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.patternRegexInput">pattern_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.keywordRegex">keyword_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.patternDescription">pattern_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.patternName">pattern_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.patternRegex">pattern_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `keyword_regex_input`<sup>Optional</sup> <a name="keyword_regex_input" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.keywordRegexInput"></a>

```python
keyword_regex_input: str
```

- *Type:* str

---

##### `pattern_description_input`<sup>Optional</sup> <a name="pattern_description_input" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.patternDescriptionInput"></a>

```python
pattern_description_input: str
```

- *Type:* str

---

##### `pattern_name_input`<sup>Optional</sup> <a name="pattern_name_input" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.patternNameInput"></a>

```python
pattern_name_input: str
```

- *Type:* str

---

##### `pattern_regex_input`<sup>Optional</sup> <a name="pattern_regex_input" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.patternRegexInput"></a>

```python
pattern_regex_input: str
```

- *Type:* str

---

##### `keyword_regex`<sup>Required</sup> <a name="keyword_regex" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.keywordRegex"></a>

```python
keyword_regex: str
```

- *Type:* str

---

##### `pattern_description`<sup>Required</sup> <a name="pattern_description" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.patternDescription"></a>

```python
pattern_description: str
```

- *Type:* str

---

##### `pattern_name`<sup>Required</sup> <a name="pattern_name" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.patternName"></a>

```python
pattern_name: str
```

- *Type:* str

---

##### `pattern_regex`<sup>Required</sup> <a name="pattern_regex" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.patternRegex"></a>

```python
pattern_regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern</a>]

---


### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_data_protection_settings

workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern</a>]]

---


### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_data_protection_settings

workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.putCustomPattern">put_custom_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.putRedactionPlaceHolder">put_redaction_place_holder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resetBuiltInPatternId">reset_built_in_pattern_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resetConfidenceLevel">reset_confidence_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resetCustomPattern">reset_custom_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resetEnforcedUrls">reset_enforced_urls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resetExemptUrls">reset_exempt_urls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resetRedactionPlaceHolder">reset_redaction_place_holder</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_pattern` <a name="put_custom_pattern" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.putCustomPattern"></a>

```python
def put_custom_pattern(
  value: typing.Union[IResolvable, typing.List[WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.putCustomPattern.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern</a>]]

---

##### `put_redaction_place_holder` <a name="put_redaction_place_holder" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.putRedactionPlaceHolder"></a>

```python
def put_redaction_place_holder(
  value: typing.Union[IResolvable, typing.List[WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.putRedactionPlaceHolder.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder</a>]]

---

##### `reset_built_in_pattern_id` <a name="reset_built_in_pattern_id" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resetBuiltInPatternId"></a>

```python
def reset_built_in_pattern_id() -> None
```

##### `reset_confidence_level` <a name="reset_confidence_level" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resetConfidenceLevel"></a>

```python
def reset_confidence_level() -> None
```

##### `reset_custom_pattern` <a name="reset_custom_pattern" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resetCustomPattern"></a>

```python
def reset_custom_pattern() -> None
```

##### `reset_enforced_urls` <a name="reset_enforced_urls" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resetEnforcedUrls"></a>

```python
def reset_enforced_urls() -> None
```

##### `reset_exempt_urls` <a name="reset_exempt_urls" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resetExemptUrls"></a>

```python
def reset_exempt_urls() -> None
```

##### `reset_redaction_place_holder` <a name="reset_redaction_place_holder" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.resetRedactionPlaceHolder"></a>

```python
def reset_redaction_place_holder() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.customPattern">custom_pattern</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.redactionPlaceHolder">redaction_place_holder</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.builtInPatternIdInput">built_in_pattern_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.confidenceLevelInput">confidence_level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.customPatternInput">custom_pattern_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.enforcedUrlsInput">enforced_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.exemptUrlsInput">exempt_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.redactionPlaceHolderInput">redaction_place_holder_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.builtInPatternId">built_in_pattern_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.confidenceLevel">confidence_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.enforcedUrls">enforced_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.exemptUrls">exempt_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_pattern`<sup>Required</sup> <a name="custom_pattern" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.customPattern"></a>

```python
custom_pattern: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPatternList</a>

---

##### `redaction_place_holder`<sup>Required</sup> <a name="redaction_place_holder" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.redactionPlaceHolder"></a>

```python
redaction_place_holder: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList</a>

---

##### `built_in_pattern_id_input`<sup>Optional</sup> <a name="built_in_pattern_id_input" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.builtInPatternIdInput"></a>

```python
built_in_pattern_id_input: str
```

- *Type:* str

---

##### `confidence_level_input`<sup>Optional</sup> <a name="confidence_level_input" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.confidenceLevelInput"></a>

```python
confidence_level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_pattern_input`<sup>Optional</sup> <a name="custom_pattern_input" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.customPatternInput"></a>

```python
custom_pattern_input: typing.Union[IResolvable, typing.List[WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternCustomPattern</a>]]

---

##### `enforced_urls_input`<sup>Optional</sup> <a name="enforced_urls_input" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.enforcedUrlsInput"></a>

```python
enforced_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exempt_urls_input`<sup>Optional</sup> <a name="exempt_urls_input" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.exemptUrlsInput"></a>

```python
exempt_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `redaction_place_holder_input`<sup>Optional</sup> <a name="redaction_place_holder_input" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.redactionPlaceHolderInput"></a>

```python
redaction_place_holder_input: typing.Union[IResolvable, typing.List[WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder</a>]]

---

##### `built_in_pattern_id`<sup>Required</sup> <a name="built_in_pattern_id" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.builtInPatternId"></a>

```python
built_in_pattern_id: str
```

- *Type:* str

---

##### `confidence_level`<sup>Required</sup> <a name="confidence_level" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.confidenceLevel"></a>

```python
confidence_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enforced_urls`<sup>Required</sup> <a name="enforced_urls" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.enforcedUrls"></a>

```python
enforced_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exempt_urls`<sup>Required</sup> <a name="exempt_urls" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.exemptUrls"></a>

```python
exempt_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern</a>]

---


### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_data_protection_settings

workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder</a>]]

---


### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_data_protection_settings

workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.resetRedactionPlaceHolderText">reset_redaction_place_holder_text</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_redaction_place_holder_text` <a name="reset_redaction_place_holder_text" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.resetRedactionPlaceHolderText"></a>

```python
def reset_redaction_place_holder_text() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.redactionPlaceHolderTextInput">redaction_place_holder_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.redactionPlaceHolderTypeInput">redaction_place_holder_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.redactionPlaceHolderText">redaction_place_holder_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.redactionPlaceHolderType">redaction_place_holder_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `redaction_place_holder_text_input`<sup>Optional</sup> <a name="redaction_place_holder_text_input" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.redactionPlaceHolderTextInput"></a>

```python
redaction_place_holder_text_input: str
```

- *Type:* str

---

##### `redaction_place_holder_type_input`<sup>Optional</sup> <a name="redaction_place_holder_type_input" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.redactionPlaceHolderTypeInput"></a>

```python
redaction_place_holder_type_input: str
```

- *Type:* str

---

##### `redaction_place_holder_text`<sup>Required</sup> <a name="redaction_place_holder_text" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.redactionPlaceHolderText"></a>

```python
redaction_place_holder_text: str
```

- *Type:* str

---

##### `redaction_place_holder_type`<sup>Required</sup> <a name="redaction_place_holder_type" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.redactionPlaceHolderType"></a>

```python
redaction_place_holder_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternRedactionPlaceHolder</a>]

---


### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_data_protection_settings

workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration">WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration">WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration</a>]]

---


### WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference <a name="WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_data_protection_settings

workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.putInlineRedactionPattern">put_inline_redaction_pattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resetGlobalConfidenceLevel">reset_global_confidence_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resetGlobalEnforcedUrls">reset_global_enforced_urls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resetGlobalExemptUrls">reset_global_exempt_urls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resetInlineRedactionPattern">reset_inline_redaction_pattern</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_inline_redaction_pattern` <a name="put_inline_redaction_pattern" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.putInlineRedactionPattern"></a>

```python
def put_inline_redaction_pattern(
  value: typing.Union[IResolvable, typing.List[WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.putInlineRedactionPattern.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern</a>]]

---

##### `reset_global_confidence_level` <a name="reset_global_confidence_level" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resetGlobalConfidenceLevel"></a>

```python
def reset_global_confidence_level() -> None
```

##### `reset_global_enforced_urls` <a name="reset_global_enforced_urls" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resetGlobalEnforcedUrls"></a>

```python
def reset_global_enforced_urls() -> None
```

##### `reset_global_exempt_urls` <a name="reset_global_exempt_urls" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resetGlobalExemptUrls"></a>

```python
def reset_global_exempt_urls() -> None
```

##### `reset_inline_redaction_pattern` <a name="reset_inline_redaction_pattern" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.resetInlineRedactionPattern"></a>

```python
def reset_inline_redaction_pattern() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.inlineRedactionPattern">inline_redaction_pattern</a></code> | <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalConfidenceLevelInput">global_confidence_level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalEnforcedUrlsInput">global_enforced_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalExemptUrlsInput">global_exempt_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.inlineRedactionPatternInput">inline_redaction_pattern_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalConfidenceLevel">global_confidence_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalEnforcedUrls">global_enforced_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalExemptUrls">global_exempt_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration">WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inline_redaction_pattern`<sup>Required</sup> <a name="inline_redaction_pattern" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.inlineRedactionPattern"></a>

```python
inline_redaction_pattern: WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList
```

- *Type:* <a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPatternList</a>

---

##### `global_confidence_level_input`<sup>Optional</sup> <a name="global_confidence_level_input" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalConfidenceLevelInput"></a>

```python
global_confidence_level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `global_enforced_urls_input`<sup>Optional</sup> <a name="global_enforced_urls_input" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalEnforcedUrlsInput"></a>

```python
global_enforced_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `global_exempt_urls_input`<sup>Optional</sup> <a name="global_exempt_urls_input" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalExemptUrlsInput"></a>

```python
global_exempt_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `inline_redaction_pattern_input`<sup>Optional</sup> <a name="inline_redaction_pattern_input" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.inlineRedactionPatternInput"></a>

```python
inline_redaction_pattern_input: typing.Union[IResolvable, typing.List[WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern">WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationInlineRedactionPattern</a>]]

---

##### `global_confidence_level`<sup>Required</sup> <a name="global_confidence_level" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalConfidenceLevel"></a>

```python
global_confidence_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `global_enforced_urls`<sup>Required</sup> <a name="global_enforced_urls" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalEnforcedUrls"></a>

```python
global_enforced_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `global_exempt_urls`<sup>Required</sup> <a name="global_exempt_urls" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.globalExemptUrls"></a>

```python
global_exempt_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.workspaceswebDataProtectionSettings.WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration">WorkspaceswebDataProtectionSettingsInlineRedactionConfiguration</a>]

---



