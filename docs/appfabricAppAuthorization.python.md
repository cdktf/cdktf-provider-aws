# `appfabricAppAuthorization` Submodule <a name="`appfabricAppAuthorization` Submodule" id="@cdktf/provider-aws.appfabricAppAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppfabricAppAuthorization <a name="AppfabricAppAuthorization" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization aws_appfabric_app_authorization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorization(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app: str,
  app_bundle_arn: str,
  auth_type: str,
  credential: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationCredential]] = None,
  tags: typing.Mapping[str] = None,
  tenant: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationTenant]] = None,
  timeouts: AppfabricAppAuthorizationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.app">app</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#app AppfabricAppAuthorization#app}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.appBundleArn">app_bundle_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#app_bundle_arn AppfabricAppAuthorization#app_bundle_arn}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.authType">auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#auth_type AppfabricAppAuthorization#auth_type}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.credential">credential</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>]]</code> | credential block. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#tags AppfabricAppAuthorization#tags}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.tenant">tenant</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>]]</code> | tenant block. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.app"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#app AppfabricAppAuthorization#app}.

---

##### `app_bundle_arn`<sup>Required</sup> <a name="app_bundle_arn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.appBundleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#app_bundle_arn AppfabricAppAuthorization#app_bundle_arn}.

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.authType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#auth_type AppfabricAppAuthorization#auth_type}.

---

##### `credential`<sup>Optional</sup> <a name="credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.credential"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>]]

credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#credential AppfabricAppAuthorization#credential}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#tags AppfabricAppAuthorization#tags}.

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.tenant"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>]]

tenant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#tenant AppfabricAppAuthorization#tenant}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#timeouts AppfabricAppAuthorization#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putCredential">put_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTenant">put_tenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetCredential">reset_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetTenant">reset_tenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_credential` <a name="put_credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putCredential"></a>

```python
def put_credential(
  value: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationCredential]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putCredential.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>]]

---

##### `put_tenant` <a name="put_tenant" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTenant"></a>

```python
def put_tenant(
  value: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationTenant]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTenant.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#create AppfabricAppAuthorization#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#delete AppfabricAppAuthorization#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#update AppfabricAppAuthorization#update}

---

##### `reset_credential` <a name="reset_credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetCredential"></a>

```python
def reset_credential() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tenant` <a name="reset_tenant" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetTenant"></a>

```python
def reset_tenant() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AppfabricAppAuthorization resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorization.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorization.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorization.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorization.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AppfabricAppAuthorization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppfabricAppAuthorization to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppfabricAppAuthorization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppfabricAppAuthorization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.authUrl">auth_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.credential">credential</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList">AppfabricAppAuthorizationCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.persona">persona</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tenant">tenant</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList">AppfabricAppAuthorizationTenantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference">AppfabricAppAuthorizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.appBundleArnInput">app_bundle_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.appInput">app_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.credentialInput">credential_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tenantInput">tenant_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.app">app</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.appBundleArn">app_bundle_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auth_url`<sup>Required</sup> <a name="auth_url" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.authUrl"></a>

```python
auth_url: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.credential"></a>

```python
credential: AppfabricAppAuthorizationCredentialList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList">AppfabricAppAuthorizationCredentialList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `persona`<sup>Required</sup> <a name="persona" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.persona"></a>

```python
persona: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tenant"></a>

```python
tenant: AppfabricAppAuthorizationTenantList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList">AppfabricAppAuthorizationTenantList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.timeouts"></a>

```python
timeouts: AppfabricAppAuthorizationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference">AppfabricAppAuthorizationTimeoutsOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `app_bundle_arn_input`<sup>Optional</sup> <a name="app_bundle_arn_input" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.appBundleArnInput"></a>

```python
app_bundle_arn_input: str
```

- *Type:* str

---

##### `app_input`<sup>Optional</sup> <a name="app_input" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.appInput"></a>

```python
app_input: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `credential_input`<sup>Optional</sup> <a name="credential_input" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.credentialInput"></a>

```python
credential_input: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationCredential]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tenant_input`<sup>Optional</sup> <a name="tenant_input" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tenantInput"></a>

```python
tenant_input: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationTenant]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AppfabricAppAuthorizationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a>]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.app"></a>

```python
app: str
```

- *Type:* str

---

##### `app_bundle_arn`<sup>Required</sup> <a name="app_bundle_arn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.appBundleArn"></a>

```python
app_bundle_arn: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorization.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppfabricAppAuthorizationConfig <a name="AppfabricAppAuthorizationConfig" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app: str,
  app_bundle_arn: str,
  auth_type: str,
  credential: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationCredential]] = None,
  tags: typing.Mapping[str] = None,
  tenant: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationTenant]] = None,
  timeouts: AppfabricAppAuthorizationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.app">app</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#app AppfabricAppAuthorization#app}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.appBundleArn">app_bundle_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#app_bundle_arn AppfabricAppAuthorization#app_bundle_arn}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.authType">auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#auth_type AppfabricAppAuthorization#auth_type}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.credential">credential</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>]]</code> | credential block. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#tags AppfabricAppAuthorization#tags}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.tenant">tenant</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>]]</code> | tenant block. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.app"></a>

```python
app: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#app AppfabricAppAuthorization#app}.

---

##### `app_bundle_arn`<sup>Required</sup> <a name="app_bundle_arn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.appBundleArn"></a>

```python
app_bundle_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#app_bundle_arn AppfabricAppAuthorization#app_bundle_arn}.

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#auth_type AppfabricAppAuthorization#auth_type}.

---

##### `credential`<sup>Optional</sup> <a name="credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.credential"></a>

```python
credential: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationCredential]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>]]

credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#credential AppfabricAppAuthorization#credential}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#tags AppfabricAppAuthorization#tags}.

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.tenant"></a>

```python
tenant: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationTenant]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>]]

tenant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#tenant AppfabricAppAuthorization#tenant}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationConfig.property.timeouts"></a>

```python
timeouts: AppfabricAppAuthorizationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#timeouts AppfabricAppAuthorization#timeouts}

---

### AppfabricAppAuthorizationCredential <a name="AppfabricAppAuthorizationCredential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationCredential(
  api_key_credential: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationCredentialApiKeyCredential]] = None,
  oauth2_credential: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationCredentialOauth2Credential]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential.property.apiKeyCredential">api_key_credential</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>]]</code> | api_key_credential block. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential.property.oauth2Credential">oauth2_credential</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>]]</code> | oauth2_credential block. |

---

##### `api_key_credential`<sup>Optional</sup> <a name="api_key_credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential.property.apiKeyCredential"></a>

```python
api_key_credential: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationCredentialApiKeyCredential]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>]]

api_key_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#api_key_credential AppfabricAppAuthorization#api_key_credential}

---

##### `oauth2_credential`<sup>Optional</sup> <a name="oauth2_credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential.property.oauth2Credential"></a>

```python
oauth2_credential: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationCredentialOauth2Credential]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>]]

oauth2_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#oauth2_credential AppfabricAppAuthorization#oauth2_credential}

---

### AppfabricAppAuthorizationCredentialApiKeyCredential <a name="AppfabricAppAuthorizationCredentialApiKeyCredential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential(
  api_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential.property.apiKey">api_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#api_key AppfabricAppAuthorization#api_key}. |

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#api_key AppfabricAppAuthorization#api_key}.

---

### AppfabricAppAuthorizationCredentialOauth2Credential <a name="AppfabricAppAuthorizationCredentialOauth2Credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential(
  client_id: str,
  client_secret: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#client_id AppfabricAppAuthorization#client_id}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#client_secret AppfabricAppAuthorization#client_secret}. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#client_id AppfabricAppAuthorization#client_id}.

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#client_secret AppfabricAppAuthorization#client_secret}.

---

### AppfabricAppAuthorizationTenant <a name="AppfabricAppAuthorizationTenant" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationTenant(
  tenant_display_name: str,
  tenant_identifier: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant.property.tenantDisplayName">tenant_display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#tenant_display_name AppfabricAppAuthorization#tenant_display_name}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant.property.tenantIdentifier">tenant_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#tenant_identifier AppfabricAppAuthorization#tenant_identifier}. |

---

##### `tenant_display_name`<sup>Required</sup> <a name="tenant_display_name" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant.property.tenantDisplayName"></a>

```python
tenant_display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#tenant_display_name AppfabricAppAuthorization#tenant_display_name}.

---

##### `tenant_identifier`<sup>Required</sup> <a name="tenant_identifier" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant.property.tenantIdentifier"></a>

```python
tenant_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#tenant_identifier AppfabricAppAuthorization#tenant_identifier}.

---

### AppfabricAppAuthorizationTimeouts <a name="AppfabricAppAuthorizationTimeouts" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#create AppfabricAppAuthorization#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#delete AppfabricAppAuthorization#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.73.0/docs/resources/appfabric_app_authorization#update AppfabricAppAuthorization#update}

---

## Classes <a name="Classes" id="Classes"></a>

### AppfabricAppAuthorizationCredentialApiKeyCredentialList <a name="AppfabricAppAuthorizationCredentialApiKeyCredentialList" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationCredentialApiKeyCredential]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>]]

---


### AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference <a name="AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppfabricAppAuthorizationCredentialApiKeyCredential]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>]

---


### AppfabricAppAuthorizationCredentialList <a name="AppfabricAppAuthorizationCredentialList" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppfabricAppAuthorizationCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationCredential]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>]]

---


### AppfabricAppAuthorizationCredentialOauth2CredentialList <a name="AppfabricAppAuthorizationCredentialOauth2CredentialList" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationCredentialOauth2Credential]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>]]

---


### AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference <a name="AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppfabricAppAuthorizationCredentialOauth2Credential]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>]

---


### AppfabricAppAuthorizationCredentialOutputReference <a name="AppfabricAppAuthorizationCredentialOutputReference" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putApiKeyCredential">put_api_key_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putOauth2Credential">put_oauth2_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resetApiKeyCredential">reset_api_key_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resetOauth2Credential">reset_oauth2_credential</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key_credential` <a name="put_api_key_credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putApiKeyCredential"></a>

```python
def put_api_key_credential(
  value: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationCredentialApiKeyCredential]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putApiKeyCredential.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>]]

---

##### `put_oauth2_credential` <a name="put_oauth2_credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putOauth2Credential"></a>

```python
def put_oauth2_credential(
  value: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationCredentialOauth2Credential]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.putOauth2Credential.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>]]

---

##### `reset_api_key_credential` <a name="reset_api_key_credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resetApiKeyCredential"></a>

```python
def reset_api_key_credential() -> None
```

##### `reset_oauth2_credential` <a name="reset_oauth2_credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.resetOauth2Credential"></a>

```python
def reset_oauth2_credential() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.apiKeyCredential">api_key_credential</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList">AppfabricAppAuthorizationCredentialApiKeyCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.oauth2Credential">oauth2_credential</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList">AppfabricAppAuthorizationCredentialOauth2CredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.apiKeyCredentialInput">api_key_credential_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.oauth2CredentialInput">oauth2_credential_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_credential`<sup>Required</sup> <a name="api_key_credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.apiKeyCredential"></a>

```python
api_key_credential: AppfabricAppAuthorizationCredentialApiKeyCredentialList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredentialList">AppfabricAppAuthorizationCredentialApiKeyCredentialList</a>

---

##### `oauth2_credential`<sup>Required</sup> <a name="oauth2_credential" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.oauth2Credential"></a>

```python
oauth2_credential: AppfabricAppAuthorizationCredentialOauth2CredentialList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2CredentialList">AppfabricAppAuthorizationCredentialOauth2CredentialList</a>

---

##### `api_key_credential_input`<sup>Optional</sup> <a name="api_key_credential_input" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.apiKeyCredentialInput"></a>

```python
api_key_credential_input: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationCredentialApiKeyCredential]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialApiKeyCredential">AppfabricAppAuthorizationCredentialApiKeyCredential</a>]]

---

##### `oauth2_credential_input`<sup>Optional</sup> <a name="oauth2_credential_input" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.oauth2CredentialInput"></a>

```python
oauth2_credential_input: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationCredentialOauth2Credential]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOauth2Credential">AppfabricAppAuthorizationCredentialOauth2Credential</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredentialOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppfabricAppAuthorizationCredential]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationCredential">AppfabricAppAuthorizationCredential</a>]

---


### AppfabricAppAuthorizationTenantList <a name="AppfabricAppAuthorizationTenantList" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationTenantList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppfabricAppAuthorizationTenantOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationTenant]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>]]

---


### AppfabricAppAuthorizationTenantOutputReference <a name="AppfabricAppAuthorizationTenantOutputReference" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantDisplayNameInput">tenant_display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantIdentifierInput">tenant_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantDisplayName">tenant_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantIdentifier">tenant_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tenant_display_name_input`<sup>Optional</sup> <a name="tenant_display_name_input" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantDisplayNameInput"></a>

```python
tenant_display_name_input: str
```

- *Type:* str

---

##### `tenant_identifier_input`<sup>Optional</sup> <a name="tenant_identifier_input" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantIdentifierInput"></a>

```python
tenant_identifier_input: str
```

- *Type:* str

---

##### `tenant_display_name`<sup>Required</sup> <a name="tenant_display_name" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantDisplayName"></a>

```python
tenant_display_name: str
```

- *Type:* str

---

##### `tenant_identifier`<sup>Required</sup> <a name="tenant_identifier" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.tenantIdentifier"></a>

```python
tenant_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenantOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppfabricAppAuthorizationTenant]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTenant">AppfabricAppAuthorizationTenant</a>]

---


### AppfabricAppAuthorizationTimeoutsOutputReference <a name="AppfabricAppAuthorizationTimeoutsOutputReference" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization

appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppfabricAppAuthorizationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricAppAuthorization.AppfabricAppAuthorizationTimeouts">AppfabricAppAuthorizationTimeouts</a>]

---



