# `securitylakeSubscriber` Submodule <a name="`securitylakeSubscriber` Submodule" id="@cdktf/provider-aws.securitylakeSubscriber"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecuritylakeSubscriber <a name="SecuritylakeSubscriber" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber aws_securitylake_subscriber}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriber(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_type: str = None,
  source: typing.Union[IResolvable, typing.List[SecuritylakeSubscriberSource]] = None,
  subscriber_description: str = None,
  subscriber_identity: typing.Union[IResolvable, typing.List[SecuritylakeSubscriberSubscriberIdentity]] = None,
  subscriber_name: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: SecuritylakeSubscriberTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.accessType">access_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#access_type SecuritylakeSubscriber#access_type}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.source">source</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>]]</code> | source block. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.subscriberDescription">subscriber_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#subscriber_description SecuritylakeSubscriber#subscriber_description}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.subscriberIdentity">subscriber_identity</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>]]</code> | subscriber_identity block. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.subscriberName">subscriber_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#subscriber_name SecuritylakeSubscriber#subscriber_name}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#tags SecuritylakeSubscriber#tags}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_type`<sup>Optional</sup> <a name="access_type" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.accessType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#access_type SecuritylakeSubscriber#access_type}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.source"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>]]

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#source SecuritylakeSubscriber#source}

---

##### `subscriber_description`<sup>Optional</sup> <a name="subscriber_description" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.subscriberDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#subscriber_description SecuritylakeSubscriber#subscriber_description}.

---

##### `subscriber_identity`<sup>Optional</sup> <a name="subscriber_identity" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.subscriberIdentity"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>]]

subscriber_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#subscriber_identity SecuritylakeSubscriber#subscriber_identity}

---

##### `subscriber_name`<sup>Optional</sup> <a name="subscriber_name" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.subscriberName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#subscriber_name SecuritylakeSubscriber#subscriber_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#tags SecuritylakeSubscriber#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#timeouts SecuritylakeSubscriber#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSubscriberIdentity">put_subscriber_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetAccessType">reset_access_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberDescription">reset_subscriber_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberIdentity">reset_subscriber_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberName">reset_subscriber_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_source` <a name="put_source" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSource"></a>

```python
def put_source(
  value: typing.Union[IResolvable, typing.List[SecuritylakeSubscriberSource]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSource.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>]]

---

##### `put_subscriber_identity` <a name="put_subscriber_identity" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSubscriberIdentity"></a>

```python
def put_subscriber_identity(
  value: typing.Union[IResolvable, typing.List[SecuritylakeSubscriberSubscriberIdentity]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putSubscriberIdentity.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#create SecuritylakeSubscriber#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#delete SecuritylakeSubscriber#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#update SecuritylakeSubscriber#update}

---

##### `reset_access_type` <a name="reset_access_type" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetAccessType"></a>

```python
def reset_access_type() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_subscriber_description` <a name="reset_subscriber_description" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberDescription"></a>

```python
def reset_subscriber_description() -> None
```

##### `reset_subscriber_identity` <a name="reset_subscriber_identity" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberIdentity"></a>

```python
def reset_subscriber_identity() -> None
```

##### `reset_subscriber_name` <a name="reset_subscriber_name" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetSubscriberName"></a>

```python
def reset_subscriber_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SecuritylakeSubscriber resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriber.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriber.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriber.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriber.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SecuritylakeSubscriber resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecuritylakeSubscriber to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecuritylakeSubscriber that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecuritylakeSubscriber to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.resourceShareArn">resource_share_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.resourceShareName">resource_share_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.s3BucketArn">s3_bucket_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList">SecuritylakeSubscriberSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberEndpoint">subscriber_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberIdentity">subscriber_identity</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList">SecuritylakeSubscriberSubscriberIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberStatus">subscriber_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference">SecuritylakeSubscriberTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.accessTypeInput">access_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.sourceInput">source_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberDescriptionInput">subscriber_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberIdentityInput">subscriber_identity_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberNameInput">subscriber_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberDescription">subscriber_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberName">subscriber_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_share_arn`<sup>Required</sup> <a name="resource_share_arn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.resourceShareArn"></a>

```python
resource_share_arn: str
```

- *Type:* str

---

##### `resource_share_name`<sup>Required</sup> <a name="resource_share_name" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.resourceShareName"></a>

```python
resource_share_name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `s3_bucket_arn`<sup>Required</sup> <a name="s3_bucket_arn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.s3BucketArn"></a>

```python
s3_bucket_arn: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.source"></a>

```python
source: SecuritylakeSubscriberSourceList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList">SecuritylakeSubscriberSourceList</a>

---

##### `subscriber_endpoint`<sup>Required</sup> <a name="subscriber_endpoint" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberEndpoint"></a>

```python
subscriber_endpoint: str
```

- *Type:* str

---

##### `subscriber_identity`<sup>Required</sup> <a name="subscriber_identity" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberIdentity"></a>

```python
subscriber_identity: SecuritylakeSubscriberSubscriberIdentityList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList">SecuritylakeSubscriberSubscriberIdentityList</a>

---

##### `subscriber_status`<sup>Required</sup> <a name="subscriber_status" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberStatus"></a>

```python
subscriber_status: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.timeouts"></a>

```python
timeouts: SecuritylakeSubscriberTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference">SecuritylakeSubscriberTimeoutsOutputReference</a>

---

##### `access_type_input`<sup>Optional</sup> <a name="access_type_input" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.accessTypeInput"></a>

```python
access_type_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.sourceInput"></a>

```python
source_input: typing.Union[IResolvable, typing.List[SecuritylakeSubscriberSource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>]]

---

##### `subscriber_description_input`<sup>Optional</sup> <a name="subscriber_description_input" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberDescriptionInput"></a>

```python
subscriber_description_input: str
```

- *Type:* str

---

##### `subscriber_identity_input`<sup>Optional</sup> <a name="subscriber_identity_input" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberIdentityInput"></a>

```python
subscriber_identity_input: typing.Union[IResolvable, typing.List[SecuritylakeSubscriberSubscriberIdentity]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>]]

---

##### `subscriber_name_input`<sup>Optional</sup> <a name="subscriber_name_input" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberNameInput"></a>

```python
subscriber_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SecuritylakeSubscriberTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a>]

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `subscriber_description`<sup>Required</sup> <a name="subscriber_description" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberDescription"></a>

```python
subscriber_description: str
```

- *Type:* str

---

##### `subscriber_name`<sup>Required</sup> <a name="subscriber_name" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.subscriberName"></a>

```python
subscriber_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriber.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecuritylakeSubscriberConfig <a name="SecuritylakeSubscriberConfig" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriberConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_type: str = None,
  source: typing.Union[IResolvable, typing.List[SecuritylakeSubscriberSource]] = None,
  subscriber_description: str = None,
  subscriber_identity: typing.Union[IResolvable, typing.List[SecuritylakeSubscriberSubscriberIdentity]] = None,
  subscriber_name: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: SecuritylakeSubscriberTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.accessType">access_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#access_type SecuritylakeSubscriber#access_type}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.source">source</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>]]</code> | source block. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberDescription">subscriber_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#subscriber_description SecuritylakeSubscriber#subscriber_description}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberIdentity">subscriber_identity</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>]]</code> | subscriber_identity block. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberName">subscriber_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#subscriber_name SecuritylakeSubscriber#subscriber_name}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#tags SecuritylakeSubscriber#tags}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_type`<sup>Optional</sup> <a name="access_type" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#access_type SecuritylakeSubscriber#access_type}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.source"></a>

```python
source: typing.Union[IResolvable, typing.List[SecuritylakeSubscriberSource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>]]

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#source SecuritylakeSubscriber#source}

---

##### `subscriber_description`<sup>Optional</sup> <a name="subscriber_description" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberDescription"></a>

```python
subscriber_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#subscriber_description SecuritylakeSubscriber#subscriber_description}.

---

##### `subscriber_identity`<sup>Optional</sup> <a name="subscriber_identity" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberIdentity"></a>

```python
subscriber_identity: typing.Union[IResolvable, typing.List[SecuritylakeSubscriberSubscriberIdentity]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>]]

subscriber_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#subscriber_identity SecuritylakeSubscriber#subscriber_identity}

---

##### `subscriber_name`<sup>Optional</sup> <a name="subscriber_name" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.subscriberName"></a>

```python
subscriber_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#subscriber_name SecuritylakeSubscriber#subscriber_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#tags SecuritylakeSubscriber#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberConfig.property.timeouts"></a>

```python
timeouts: SecuritylakeSubscriberTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#timeouts SecuritylakeSubscriber#timeouts}

---

### SecuritylakeSubscriberSource <a name="SecuritylakeSubscriberSource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriberSource(
  aws_log_source_resource: typing.Union[IResolvable, typing.List[SecuritylakeSubscriberSourceAwsLogSourceResource]] = None,
  custom_log_source_resource: typing.Union[IResolvable, typing.List[SecuritylakeSubscriberSourceCustomLogSourceResource]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource.property.awsLogSourceResource">aws_log_source_resource</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>]]</code> | aws_log_source_resource block. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource.property.customLogSourceResource">custom_log_source_resource</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>]]</code> | custom_log_source_resource block. |

---

##### `aws_log_source_resource`<sup>Optional</sup> <a name="aws_log_source_resource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource.property.awsLogSourceResource"></a>

```python
aws_log_source_resource: typing.Union[IResolvable, typing.List[SecuritylakeSubscriberSourceAwsLogSourceResource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>]]

aws_log_source_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#aws_log_source_resource SecuritylakeSubscriber#aws_log_source_resource}

---

##### `custom_log_source_resource`<sup>Optional</sup> <a name="custom_log_source_resource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource.property.customLogSourceResource"></a>

```python
custom_log_source_resource: typing.Union[IResolvable, typing.List[SecuritylakeSubscriberSourceCustomLogSourceResource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>]]

custom_log_source_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#custom_log_source_resource SecuritylakeSubscriber#custom_log_source_resource}

---

### SecuritylakeSubscriberSourceAwsLogSourceResource <a name="SecuritylakeSubscriberSourceAwsLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource(
  source_name: str = None,
  source_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource.property.sourceName">source_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#source_name SecuritylakeSubscriber#source_name}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource.property.sourceVersion">source_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#source_version SecuritylakeSubscriber#source_version}. |

---

##### `source_name`<sup>Optional</sup> <a name="source_name" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#source_name SecuritylakeSubscriber#source_name}.

---

##### `source_version`<sup>Optional</sup> <a name="source_version" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource.property.sourceVersion"></a>

```python
source_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#source_version SecuritylakeSubscriber#source_version}.

---

### SecuritylakeSubscriberSourceCustomLogSourceResource <a name="SecuritylakeSubscriberSourceCustomLogSourceResource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource(
  source_name: str = None,
  source_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource.property.sourceName">source_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#source_name SecuritylakeSubscriber#source_name}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource.property.sourceVersion">source_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#source_version SecuritylakeSubscriber#source_version}. |

---

##### `source_name`<sup>Optional</sup> <a name="source_name" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#source_name SecuritylakeSubscriber#source_name}.

---

##### `source_version`<sup>Optional</sup> <a name="source_version" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource.property.sourceVersion"></a>

```python
source_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#source_version SecuritylakeSubscriber#source_version}.

---

### SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes()
```


### SecuritylakeSubscriberSourceCustomLogSourceResourceProvider <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceProvider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProvider()
```


### SecuritylakeSubscriberSubscriberIdentity <a name="SecuritylakeSubscriberSubscriberIdentity" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity(
  external_id: str,
  principal: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#external_id SecuritylakeSubscriber#external_id}. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity.property.principal">principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#principal SecuritylakeSubscriber#principal}. |

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#external_id SecuritylakeSubscriber#external_id}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity.property.principal"></a>

```python
principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#principal SecuritylakeSubscriber#principal}.

---

### SecuritylakeSubscriberTimeouts <a name="SecuritylakeSubscriberTimeouts" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriberTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#create SecuritylakeSubscriber#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#delete SecuritylakeSubscriber#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/securitylake_subscriber#update SecuritylakeSubscriber#update}

---

## Classes <a name="Classes" id="Classes"></a>

### SecuritylakeSubscriberSourceAwsLogSourceResourceList <a name="SecuritylakeSubscriberSourceAwsLogSourceResourceList" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SecuritylakeSubscriberSourceAwsLogSourceResource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>]]

---


### SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference <a name="SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resetSourceName">reset_source_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resetSourceVersion">reset_source_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_name` <a name="reset_source_name" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resetSourceName"></a>

```python
def reset_source_name() -> None
```

##### `reset_source_version` <a name="reset_source_version" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.resetSourceVersion"></a>

```python
def reset_source_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceNameInput">source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceVersionInput">source_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceName">source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceVersion">source_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_name_input`<sup>Optional</sup> <a name="source_name_input" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceNameInput"></a>

```python
source_name_input: str
```

- *Type:* str

---

##### `source_version_input`<sup>Optional</sup> <a name="source_version_input" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceVersionInput"></a>

```python
source_version_input: str
```

- *Type:* str

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

---

##### `source_version`<sup>Required</sup> <a name="source_version" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.sourceVersion"></a>

```python
source_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SecuritylakeSubscriberSourceAwsLogSourceResource]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>]

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.crawlerArn">crawler_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.databaseArn">database_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.tableArn">table_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes">SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `crawler_arn`<sup>Required</sup> <a name="crawler_arn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.crawlerArn"></a>

```python
crawler_arn: str
```

- *Type:* str

---

##### `database_arn`<sup>Required</sup> <a name="database_arn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.databaseArn"></a>

```python
database_arn: str
```

- *Type:* str

---

##### `table_arn`<sup>Required</sup> <a name="table_arn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.tableArn"></a>

```python
table_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference.property.internalValue"></a>

```python
internal_value: SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes">SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes</a>

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceList <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceList" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SecuritylakeSubscriberSourceCustomLogSourceResource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>]]

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resetSourceName">reset_source_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resetSourceVersion">reset_source_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_name` <a name="reset_source_name" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resetSourceName"></a>

```python
def reset_source_name() -> None
```

##### `reset_source_version` <a name="reset_source_version" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.resetSourceVersion"></a>

```python
def reset_source_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList">SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.provider">provider</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList">SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceNameInput">source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceVersionInput">source_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceName">source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceVersion">source_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.attributes"></a>

```python
attributes: SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList">SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList</a>

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.provider"></a>

```python
provider: SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList">SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList</a>

---

##### `source_name_input`<sup>Optional</sup> <a name="source_name_input" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceNameInput"></a>

```python
source_name_input: str
```

- *Type:* str

---

##### `source_version_input`<sup>Optional</sup> <a name="source_version_input" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceVersionInput"></a>

```python
source_version_input: str
```

- *Type:* str

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

---

##### `source_version`<sup>Required</sup> <a name="source_version" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.sourceVersion"></a>

```python
source_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SecuritylakeSubscriberSourceCustomLogSourceResource]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>]

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference <a name="SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProvider">SecuritylakeSubscriberSourceCustomLogSourceResourceProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference.property.internalValue"></a>

```python
internal_value: SecuritylakeSubscriberSourceCustomLogSourceResourceProvider
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceProvider">SecuritylakeSubscriberSourceCustomLogSourceResourceProvider</a>

---


### SecuritylakeSubscriberSourceList <a name="SecuritylakeSubscriberSourceList" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriberSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecuritylakeSubscriberSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SecuritylakeSubscriberSource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>]]

---


### SecuritylakeSubscriberSourceOutputReference <a name="SecuritylakeSubscriberSourceOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putAwsLogSourceResource">put_aws_log_source_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putCustomLogSourceResource">put_custom_log_source_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resetAwsLogSourceResource">reset_aws_log_source_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resetCustomLogSourceResource">reset_custom_log_source_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_log_source_resource` <a name="put_aws_log_source_resource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putAwsLogSourceResource"></a>

```python
def put_aws_log_source_resource(
  value: typing.Union[IResolvable, typing.List[SecuritylakeSubscriberSourceAwsLogSourceResource]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putAwsLogSourceResource.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>]]

---

##### `put_custom_log_source_resource` <a name="put_custom_log_source_resource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putCustomLogSourceResource"></a>

```python
def put_custom_log_source_resource(
  value: typing.Union[IResolvable, typing.List[SecuritylakeSubscriberSourceCustomLogSourceResource]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.putCustomLogSourceResource.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>]]

---

##### `reset_aws_log_source_resource` <a name="reset_aws_log_source_resource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resetAwsLogSourceResource"></a>

```python
def reset_aws_log_source_resource() -> None
```

##### `reset_custom_log_source_resource` <a name="reset_custom_log_source_resource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.resetCustomLogSourceResource"></a>

```python
def reset_custom_log_source_resource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.awsLogSourceResource">aws_log_source_resource</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList">SecuritylakeSubscriberSourceAwsLogSourceResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.customLogSourceResource">custom_log_source_resource</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList">SecuritylakeSubscriberSourceCustomLogSourceResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.awsLogSourceResourceInput">aws_log_source_resource_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.customLogSourceResourceInput">custom_log_source_resource_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_log_source_resource`<sup>Required</sup> <a name="aws_log_source_resource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.awsLogSourceResource"></a>

```python
aws_log_source_resource: SecuritylakeSubscriberSourceAwsLogSourceResourceList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResourceList">SecuritylakeSubscriberSourceAwsLogSourceResourceList</a>

---

##### `custom_log_source_resource`<sup>Required</sup> <a name="custom_log_source_resource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.customLogSourceResource"></a>

```python
custom_log_source_resource: SecuritylakeSubscriberSourceCustomLogSourceResourceList
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResourceList">SecuritylakeSubscriberSourceCustomLogSourceResourceList</a>

---

##### `aws_log_source_resource_input`<sup>Optional</sup> <a name="aws_log_source_resource_input" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.awsLogSourceResourceInput"></a>

```python
aws_log_source_resource_input: typing.Union[IResolvable, typing.List[SecuritylakeSubscriberSourceAwsLogSourceResource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceAwsLogSourceResource">SecuritylakeSubscriberSourceAwsLogSourceResource</a>]]

---

##### `custom_log_source_resource_input`<sup>Optional</sup> <a name="custom_log_source_resource_input" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.customLogSourceResourceInput"></a>

```python
custom_log_source_resource_input: typing.Union[IResolvable, typing.List[SecuritylakeSubscriberSourceCustomLogSourceResource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceCustomLogSourceResource">SecuritylakeSubscriberSourceCustomLogSourceResource</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSourceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SecuritylakeSubscriberSource]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSource">SecuritylakeSubscriberSource</a>]

---


### SecuritylakeSubscriberSubscriberIdentityList <a name="SecuritylakeSubscriberSubscriberIdentityList" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecuritylakeSubscriberSubscriberIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SecuritylakeSubscriberSubscriberIdentity]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>]]

---


### SecuritylakeSubscriberSubscriberIdentityOutputReference <a name="SecuritylakeSubscriberSubscriberIdentityOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.principalInput">principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `principal_input`<sup>Optional</sup> <a name="principal_input" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.principalInput"></a>

```python
principal_input: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentityOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SecuritylakeSubscriberSubscriberIdentity]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberSubscriberIdentity">SecuritylakeSubscriberSubscriberIdentity</a>]

---


### SecuritylakeSubscriberTimeoutsOutputReference <a name="SecuritylakeSubscriberTimeoutsOutputReference" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securitylake_subscriber

securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SecuritylakeSubscriberTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securitylakeSubscriber.SecuritylakeSubscriberTimeouts">SecuritylakeSubscriberTimeouts</a>]

---



