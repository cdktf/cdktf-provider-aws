# `opensearchAuthorizeVpcEndpointAccess` Submodule <a name="`opensearchAuthorizeVpcEndpointAccess` Submodule" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchAuthorizeVpcEndpointAccess <a name="OpensearchAuthorizeVpcEndpointAccess" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/opensearch_authorize_vpc_endpoint_access aws_opensearch_authorize_vpc_endpoint_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_authorize_vpc_endpoint_access

opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account: str,
  domain_name: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.account">account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/opensearch_authorize_vpc_endpoint_access#account OpensearchAuthorizeVpcEndpointAccess#account}. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/opensearch_authorize_vpc_endpoint_access#domain_name OpensearchAuthorizeVpcEndpointAccess#domain_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.account"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/opensearch_authorize_vpc_endpoint_access#account OpensearchAuthorizeVpcEndpointAccess#account}.

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/opensearch_authorize_vpc_endpoint_access#domain_name OpensearchAuthorizeVpcEndpointAccess#domain_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OpensearchAuthorizeVpcEndpointAccess resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_authorize_vpc_endpoint_access

opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_authorize_vpc_endpoint_access

opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_authorize_vpc_endpoint_access

opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_authorize_vpc_endpoint_access

opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OpensearchAuthorizeVpcEndpointAccess resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OpensearchAuthorizeVpcEndpointAccess to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OpensearchAuthorizeVpcEndpointAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/opensearch_authorize_vpc_endpoint_access#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpensearchAuthorizeVpcEndpointAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.authorizedPrincipal">authorized_principal</a></code> | <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList">OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.accountInput">account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.account">account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorized_principal`<sup>Required</sup> <a name="authorized_principal" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.authorizedPrincipal"></a>

```python
authorized_principal: OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList">OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList</a>

---

##### `account_input`<sup>Optional</sup> <a name="account_input" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.accountInput"></a>

```python
account_input: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.account"></a>

```python
account: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal <a name="OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_authorize_vpc_endpoint_access

opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal()
```


### OpensearchAuthorizeVpcEndpointAccessConfig <a name="OpensearchAuthorizeVpcEndpointAccessConfig" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_authorize_vpc_endpoint_access

opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account: str,
  domain_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.account">account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/opensearch_authorize_vpc_endpoint_access#account OpensearchAuthorizeVpcEndpointAccess#account}. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/opensearch_authorize_vpc_endpoint_access#domain_name OpensearchAuthorizeVpcEndpointAccess#domain_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.account"></a>

```python
account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/opensearch_authorize_vpc_endpoint_access#account OpensearchAuthorizeVpcEndpointAccess#account}.

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/opensearch_authorize_vpc_endpoint_access#domain_name OpensearchAuthorizeVpcEndpointAccess#domain_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList <a name="OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_authorize_vpc_endpoint_access

opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference <a name="OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_authorize_vpc_endpoint_access

opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal">OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.internalValue"></a>

```python
internal_value: OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal">OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal</a>

---



