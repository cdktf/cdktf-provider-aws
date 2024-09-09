# `opensearchserverlessSecurityConfig` Submodule <a name="`opensearchserverlessSecurityConfig` Submodule" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserverlessSecurityConfig <a name="OpensearchserverlessSecurityConfig" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config aws_opensearchserverless_security_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  type: str,
  description: str = None,
  saml_options: OpensearchserverlessSecurityConfigSamlOptions = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#name OpensearchserverlessSecurityConfig#name}. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#type OpensearchserverlessSecurityConfig#type}. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#description OpensearchserverlessSecurityConfig#description}. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.samlOptions">saml_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a></code> | saml_options block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#name OpensearchserverlessSecurityConfig#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#type OpensearchserverlessSecurityConfig#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#description OpensearchserverlessSecurityConfig#description}.

---

##### `saml_options`<sup>Optional</sup> <a name="saml_options" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.samlOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>

saml_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#saml_options OpensearchserverlessSecurityConfig#saml_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putSamlOptions">put_saml_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetSamlOptions">reset_saml_options</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_saml_options` <a name="put_saml_options" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putSamlOptions"></a>

```python
def put_saml_options(
  metadata: str,
  group_attribute: str = None,
  session_timeout: typing.Union[int, float] = None,
  user_attribute: str = None
) -> None
```

###### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putSamlOptions.parameter.metadata"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#metadata OpensearchserverlessSecurityConfig#metadata}.

---

###### `group_attribute`<sup>Optional</sup> <a name="group_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putSamlOptions.parameter.groupAttribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#group_attribute OpensearchserverlessSecurityConfig#group_attribute}.

---

###### `session_timeout`<sup>Optional</sup> <a name="session_timeout" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putSamlOptions.parameter.sessionTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#session_timeout OpensearchserverlessSecurityConfig#session_timeout}.

---

###### `user_attribute`<sup>Optional</sup> <a name="user_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putSamlOptions.parameter.userAttribute"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#user_attribute OpensearchserverlessSecurityConfig#user_attribute}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_saml_options` <a name="reset_saml_options" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetSamlOptions"></a>

```python
def reset_saml_options() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OpensearchserverlessSecurityConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OpensearchserverlessSecurityConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OpensearchserverlessSecurityConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OpensearchserverlessSecurityConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpensearchserverlessSecurityConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.configVersion">config_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.samlOptions">saml_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference">OpensearchserverlessSecurityConfigSamlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.samlOptionsInput">saml_options_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config_version`<sup>Required</sup> <a name="config_version" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.configVersion"></a>

```python
config_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `saml_options`<sup>Required</sup> <a name="saml_options" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.samlOptions"></a>

```python
saml_options: OpensearchserverlessSecurityConfigSamlOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference">OpensearchserverlessSecurityConfigSamlOptionsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `saml_options_input`<sup>Optional</sup> <a name="saml_options_input" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.samlOptionsInput"></a>

```python
saml_options_input: typing.Union[IResolvable, OpensearchserverlessSecurityConfigSamlOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserverlessSecurityConfigConfig <a name="OpensearchserverlessSecurityConfigConfig" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  type: str,
  description: str = None,
  saml_options: OpensearchserverlessSecurityConfigSamlOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#name OpensearchserverlessSecurityConfig#name}. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#type OpensearchserverlessSecurityConfig#type}. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#description OpensearchserverlessSecurityConfig#description}. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.samlOptions">saml_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a></code> | saml_options block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#name OpensearchserverlessSecurityConfig#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#type OpensearchserverlessSecurityConfig#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#description OpensearchserverlessSecurityConfig#description}.

---

##### `saml_options`<sup>Optional</sup> <a name="saml_options" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.samlOptions"></a>

```python
saml_options: OpensearchserverlessSecurityConfigSamlOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>

saml_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#saml_options OpensearchserverlessSecurityConfig#saml_options}

---

### OpensearchserverlessSecurityConfigSamlOptions <a name="OpensearchserverlessSecurityConfigSamlOptions" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions(
  metadata: str,
  group_attribute: str = None,
  session_timeout: typing.Union[int, float] = None,
  user_attribute: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.metadata">metadata</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#metadata OpensearchserverlessSecurityConfig#metadata}. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.groupAttribute">group_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#group_attribute OpensearchserverlessSecurityConfig#group_attribute}. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.sessionTimeout">session_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#session_timeout OpensearchserverlessSecurityConfig#session_timeout}. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.userAttribute">user_attribute</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#user_attribute OpensearchserverlessSecurityConfig#user_attribute}. |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#metadata OpensearchserverlessSecurityConfig#metadata}.

---

##### `group_attribute`<sup>Optional</sup> <a name="group_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.groupAttribute"></a>

```python
group_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#group_attribute OpensearchserverlessSecurityConfig#group_attribute}.

---

##### `session_timeout`<sup>Optional</sup> <a name="session_timeout" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.sessionTimeout"></a>

```python
session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#session_timeout OpensearchserverlessSecurityConfig#session_timeout}.

---

##### `user_attribute`<sup>Optional</sup> <a name="user_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.userAttribute"></a>

```python
user_attribute: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/resources/opensearchserverless_security_config#user_attribute OpensearchserverlessSecurityConfig#user_attribute}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchserverlessSecurityConfigSamlOptionsOutputReference <a name="OpensearchserverlessSecurityConfigSamlOptionsOutputReference" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearchserverless_security_config

opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetGroupAttribute">reset_group_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetSessionTimeout">reset_session_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetUserAttribute">reset_user_attribute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_attribute` <a name="reset_group_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetGroupAttribute"></a>

```python
def reset_group_attribute() -> None
```

##### `reset_session_timeout` <a name="reset_session_timeout" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetSessionTimeout"></a>

```python
def reset_session_timeout() -> None
```

##### `reset_user_attribute` <a name="reset_user_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetUserAttribute"></a>

```python
def reset_user_attribute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttributeInput">group_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeoutInput">session_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttributeInput">user_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttribute">group_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeout">session_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttribute">user_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_attribute_input`<sup>Optional</sup> <a name="group_attribute_input" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttributeInput"></a>

```python
group_attribute_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `session_timeout_input`<sup>Optional</sup> <a name="session_timeout_input" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeoutInput"></a>

```python
session_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_attribute_input`<sup>Optional</sup> <a name="user_attribute_input" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttributeInput"></a>

```python
user_attribute_input: str
```

- *Type:* str

---

##### `group_attribute`<sup>Required</sup> <a name="group_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttribute"></a>

```python
group_attribute: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `session_timeout`<sup>Required</sup> <a name="session_timeout" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeout"></a>

```python
session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_attribute`<sup>Required</sup> <a name="user_attribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttribute"></a>

```python
user_attribute: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OpensearchserverlessSecurityConfigSamlOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>]

---



