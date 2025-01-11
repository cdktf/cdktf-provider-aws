# `appfabricAppAuthorizationConnection` Submodule <a name="`appfabricAppAuthorizationConnection` Submodule" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppfabricAppAuthorizationConnection <a name="AppfabricAppAuthorizationConnection" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/appfabric_app_authorization_connection aws_appfabric_app_authorization_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization_connection

appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_authorization_arn: str,
  app_bundle_arn: str,
  auth_request: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationConnectionAuthRequest]] = None,
  timeouts: AppfabricAppAuthorizationConnectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.appAuthorizationArn">app_authorization_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/appfabric_app_authorization_connection#app_authorization_arn AppfabricAppAuthorizationConnection#app_authorization_arn}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.appBundleArn">app_bundle_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/appfabric_app_authorization_connection#app_bundle_arn AppfabricAppAuthorizationConnection#app_bundle_arn}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.authRequest">auth_request</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>]]</code> | auth_request block. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_authorization_arn`<sup>Required</sup> <a name="app_authorization_arn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.appAuthorizationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/appfabric_app_authorization_connection#app_authorization_arn AppfabricAppAuthorizationConnection#app_authorization_arn}.

---

##### `app_bundle_arn`<sup>Required</sup> <a name="app_bundle_arn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.appBundleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/appfabric_app_authorization_connection#app_bundle_arn AppfabricAppAuthorizationConnection#app_bundle_arn}.

---

##### `auth_request`<sup>Optional</sup> <a name="auth_request" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.authRequest"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>]]

auth_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/appfabric_app_authorization_connection#auth_request AppfabricAppAuthorizationConnection#auth_request}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/appfabric_app_authorization_connection#timeouts AppfabricAppAuthorizationConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.putAuthRequest">put_auth_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetAuthRequest">reset_auth_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auth_request` <a name="put_auth_request" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.putAuthRequest"></a>

```python
def put_auth_request(
  value: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationConnectionAuthRequest]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.putAuthRequest.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/appfabric_app_authorization_connection#create AppfabricAppAuthorizationConnection#create}

---

##### `reset_auth_request` <a name="reset_auth_request" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetAuthRequest"></a>

```python
def reset_auth_request() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AppfabricAppAuthorizationConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization_connection

appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization_connection

appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization_connection

appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization_connection

appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AppfabricAppAuthorizationConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppfabricAppAuthorizationConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppfabricAppAuthorizationConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/appfabric_app_authorization_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppfabricAppAuthorizationConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.app">app</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.authRequest">auth_request</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList">AppfabricAppAuthorizationConnectionAuthRequestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.tenant">tenant</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList">AppfabricAppAuthorizationConnectionTenantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference">AppfabricAppAuthorizationConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appAuthorizationArnInput">app_authorization_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appBundleArnInput">app_bundle_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.authRequestInput">auth_request_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appAuthorizationArn">app_authorization_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appBundleArn">app_bundle_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.app"></a>

```python
app: str
```

- *Type:* str

---

##### `auth_request`<sup>Required</sup> <a name="auth_request" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.authRequest"></a>

```python
auth_request: AppfabricAppAuthorizationConnectionAuthRequestList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList">AppfabricAppAuthorizationConnectionAuthRequestList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.tenant"></a>

```python
tenant: AppfabricAppAuthorizationConnectionTenantList
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList">AppfabricAppAuthorizationConnectionTenantList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.timeouts"></a>

```python
timeouts: AppfabricAppAuthorizationConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference">AppfabricAppAuthorizationConnectionTimeoutsOutputReference</a>

---

##### `app_authorization_arn_input`<sup>Optional</sup> <a name="app_authorization_arn_input" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appAuthorizationArnInput"></a>

```python
app_authorization_arn_input: str
```

- *Type:* str

---

##### `app_bundle_arn_input`<sup>Optional</sup> <a name="app_bundle_arn_input" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appBundleArnInput"></a>

```python
app_bundle_arn_input: str
```

- *Type:* str

---

##### `auth_request_input`<sup>Optional</sup> <a name="auth_request_input" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.authRequestInput"></a>

```python
auth_request_input: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationConnectionAuthRequest]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AppfabricAppAuthorizationConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a>]

---

##### `app_authorization_arn`<sup>Required</sup> <a name="app_authorization_arn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appAuthorizationArn"></a>

```python
app_authorization_arn: str
```

- *Type:* str

---

##### `app_bundle_arn`<sup>Required</sup> <a name="app_bundle_arn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.appBundleArn"></a>

```python
app_bundle_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppfabricAppAuthorizationConnectionAuthRequest <a name="AppfabricAppAuthorizationConnectionAuthRequest" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization_connection

appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest(
  code: str,
  redirect_uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest.property.code">code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/appfabric_app_authorization_connection#code AppfabricAppAuthorizationConnection#code}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest.property.redirectUri">redirect_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/appfabric_app_authorization_connection#redirect_uri AppfabricAppAuthorizationConnection#redirect_uri}. |

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest.property.code"></a>

```python
code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/appfabric_app_authorization_connection#code AppfabricAppAuthorizationConnection#code}.

---

##### `redirect_uri`<sup>Required</sup> <a name="redirect_uri" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest.property.redirectUri"></a>

```python
redirect_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/appfabric_app_authorization_connection#redirect_uri AppfabricAppAuthorizationConnection#redirect_uri}.

---

### AppfabricAppAuthorizationConnectionConfig <a name="AppfabricAppAuthorizationConnectionConfig" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization_connection

appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_authorization_arn: str,
  app_bundle_arn: str,
  auth_request: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationConnectionAuthRequest]] = None,
  timeouts: AppfabricAppAuthorizationConnectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.appAuthorizationArn">app_authorization_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/appfabric_app_authorization_connection#app_authorization_arn AppfabricAppAuthorizationConnection#app_authorization_arn}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.appBundleArn">app_bundle_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/appfabric_app_authorization_connection#app_bundle_arn AppfabricAppAuthorizationConnection#app_bundle_arn}. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.authRequest">auth_request</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>]]</code> | auth_request block. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_authorization_arn`<sup>Required</sup> <a name="app_authorization_arn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.appAuthorizationArn"></a>

```python
app_authorization_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/appfabric_app_authorization_connection#app_authorization_arn AppfabricAppAuthorizationConnection#app_authorization_arn}.

---

##### `app_bundle_arn`<sup>Required</sup> <a name="app_bundle_arn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.appBundleArn"></a>

```python
app_bundle_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/appfabric_app_authorization_connection#app_bundle_arn AppfabricAppAuthorizationConnection#app_bundle_arn}.

---

##### `auth_request`<sup>Optional</sup> <a name="auth_request" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.authRequest"></a>

```python
auth_request: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationConnectionAuthRequest]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>]]

auth_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/appfabric_app_authorization_connection#auth_request AppfabricAppAuthorizationConnection#auth_request}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionConfig.property.timeouts"></a>

```python
timeouts: AppfabricAppAuthorizationConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/appfabric_app_authorization_connection#timeouts AppfabricAppAuthorizationConnection#timeouts}

---

### AppfabricAppAuthorizationConnectionTenant <a name="AppfabricAppAuthorizationConnectionTenant" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenant.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization_connection

appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenant()
```


### AppfabricAppAuthorizationConnectionTimeouts <a name="AppfabricAppAuthorizationConnectionTimeouts" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization_connection

appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.1/docs/resources/appfabric_app_authorization_connection#create AppfabricAppAuthorizationConnection#create}

---

## Classes <a name="Classes" id="Classes"></a>

### AppfabricAppAuthorizationConnectionAuthRequestList <a name="AppfabricAppAuthorizationConnectionAuthRequestList" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization_connection

appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppfabricAppAuthorizationConnectionAuthRequestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppfabricAppAuthorizationConnectionAuthRequest]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>]]

---


### AppfabricAppAuthorizationConnectionAuthRequestOutputReference <a name="AppfabricAppAuthorizationConnectionAuthRequestOutputReference" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization_connection

appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.codeInput">code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.redirectUriInput">redirect_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.redirectUri">redirect_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.codeInput"></a>

```python
code_input: str
```

- *Type:* str

---

##### `redirect_uri_input`<sup>Optional</sup> <a name="redirect_uri_input" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.redirectUriInput"></a>

```python
redirect_uri_input: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `redirect_uri`<sup>Required</sup> <a name="redirect_uri" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.redirectUri"></a>

```python
redirect_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequestOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppfabricAppAuthorizationConnectionAuthRequest]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionAuthRequest">AppfabricAppAuthorizationConnectionAuthRequest</a>]

---


### AppfabricAppAuthorizationConnectionTenantList <a name="AppfabricAppAuthorizationConnectionTenantList" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization_connection

appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppfabricAppAuthorizationConnectionTenantOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AppfabricAppAuthorizationConnectionTenantOutputReference <a name="AppfabricAppAuthorizationConnectionTenantOutputReference" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization_connection

appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.tenantDisplayName">tenant_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.tenantIdentifier">tenant_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenant">AppfabricAppAuthorizationConnectionTenant</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tenant_display_name`<sup>Required</sup> <a name="tenant_display_name" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.tenantDisplayName"></a>

```python
tenant_display_name: str
```

- *Type:* str

---

##### `tenant_identifier`<sup>Required</sup> <a name="tenant_identifier" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.tenantIdentifier"></a>

```python
tenant_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenantOutputReference.property.internalValue"></a>

```python
internal_value: AppfabricAppAuthorizationConnectionTenant
```

- *Type:* <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTenant">AppfabricAppAuthorizationConnectionTenant</a>

---


### AppfabricAppAuthorizationConnectionTimeoutsOutputReference <a name="AppfabricAppAuthorizationConnectionTimeoutsOutputReference" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appfabric_app_authorization_connection

appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppfabricAppAuthorizationConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appfabricAppAuthorizationConnection.AppfabricAppAuthorizationConnectionTimeouts">AppfabricAppAuthorizationConnectionTimeouts</a>]

---



