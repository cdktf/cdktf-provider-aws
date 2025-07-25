# `iamServerCertificate` Submodule <a name="`iamServerCertificate` Submodule" id="@cdktf/provider-aws.iamServerCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamServerCertificate <a name="IamServerCertificate" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate aws_iam_server_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iam_server_certificate

iamServerCertificate.IamServerCertificate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_body: str,
  private_key: str,
  certificate_chain: str = None,
  id: str = None,
  name: str = None,
  name_prefix: str = None,
  path: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: IamServerCertificateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.certificateBody">certificate_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#certificate_body IamServerCertificate#certificate_body}. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#private_key IamServerCertificate#private_key}. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.certificateChain">certificate_chain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#certificate_chain IamServerCertificate#certificate_chain}. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#id IamServerCertificate#id}. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#name IamServerCertificate#name}. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#name_prefix IamServerCertificate#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#path IamServerCertificate#path}. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#tags IamServerCertificate#tags}. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#tags_all IamServerCertificate#tags_all}. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeouts">IamServerCertificateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_body`<sup>Required</sup> <a name="certificate_body" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.certificateBody"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#certificate_body IamServerCertificate#certificate_body}.

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.privateKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#private_key IamServerCertificate#private_key}.

---

##### `certificate_chain`<sup>Optional</sup> <a name="certificate_chain" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.certificateChain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#certificate_chain IamServerCertificate#certificate_chain}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#id IamServerCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#name IamServerCertificate#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#name_prefix IamServerCertificate#name_prefix}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#path IamServerCertificate#path}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#tags IamServerCertificate#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#tags_all IamServerCertificate#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeouts">IamServerCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#timeouts IamServerCertificate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.resetCertificateChain">reset_certificate_chain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.putTimeouts"></a>

```python
def put_timeouts(
  delete: str = None
) -> None
```

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#delete IamServerCertificate#delete}.

---

##### `reset_certificate_chain` <a name="reset_certificate_chain" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.resetCertificateChain"></a>

```python
def reset_certificate_chain() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IamServerCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import iam_server_certificate

iamServerCertificate.IamServerCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import iam_server_certificate

iamServerCertificate.IamServerCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import iam_server_certificate

iamServerCertificate.IamServerCertificate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import iam_server_certificate

iamServerCertificate.IamServerCertificate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IamServerCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IamServerCertificate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IamServerCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IamServerCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.expiration">expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference">IamServerCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.uploadDate">upload_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.certificateBodyInput">certificate_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.certificateChainInput">certificate_chain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeouts">IamServerCertificateTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.certificateBody">certificate_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.certificateChain">certificate_chain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.timeouts"></a>

```python
timeouts: IamServerCertificateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference">IamServerCertificateTimeoutsOutputReference</a>

---

##### `upload_date`<sup>Required</sup> <a name="upload_date" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.uploadDate"></a>

```python
upload_date: str
```

- *Type:* str

---

##### `certificate_body_input`<sup>Optional</sup> <a name="certificate_body_input" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.certificateBodyInput"></a>

```python
certificate_body_input: str
```

- *Type:* str

---

##### `certificate_chain_input`<sup>Optional</sup> <a name="certificate_chain_input" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.certificateChainInput"></a>

```python
certificate_chain_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IamServerCertificateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeouts">IamServerCertificateTimeouts</a>]

---

##### `certificate_body`<sup>Required</sup> <a name="certificate_body" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.certificateBody"></a>

```python
certificate_body: str
```

- *Type:* str

---

##### `certificate_chain`<sup>Required</sup> <a name="certificate_chain" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.certificateChain"></a>

```python
certificate_chain: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IamServerCertificateConfig <a name="IamServerCertificateConfig" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iam_server_certificate

iamServerCertificate.IamServerCertificateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_body: str,
  private_key: str,
  certificate_chain: str = None,
  id: str = None,
  name: str = None,
  name_prefix: str = None,
  path: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: IamServerCertificateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.certificateBody">certificate_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#certificate_body IamServerCertificate#certificate_body}. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#private_key IamServerCertificate#private_key}. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.certificateChain">certificate_chain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#certificate_chain IamServerCertificate#certificate_chain}. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#id IamServerCertificate#id}. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#name IamServerCertificate#name}. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#name_prefix IamServerCertificate#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#path IamServerCertificate#path}. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#tags IamServerCertificate#tags}. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#tags_all IamServerCertificate#tags_all}. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeouts">IamServerCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_body`<sup>Required</sup> <a name="certificate_body" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.certificateBody"></a>

```python
certificate_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#certificate_body IamServerCertificate#certificate_body}.

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#private_key IamServerCertificate#private_key}.

---

##### `certificate_chain`<sup>Optional</sup> <a name="certificate_chain" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.certificateChain"></a>

```python
certificate_chain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#certificate_chain IamServerCertificate#certificate_chain}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#id IamServerCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#name IamServerCertificate#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#name_prefix IamServerCertificate#name_prefix}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#path IamServerCertificate#path}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#tags IamServerCertificate#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#tags_all IamServerCertificate#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateConfig.property.timeouts"></a>

```python
timeouts: IamServerCertificateTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeouts">IamServerCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#timeouts IamServerCertificate#timeouts}

---

### IamServerCertificateTimeouts <a name="IamServerCertificateTimeouts" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iam_server_certificate

iamServerCertificate.IamServerCertificateTimeouts(
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#delete IamServerCertificate#delete}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/iam_server_certificate#delete IamServerCertificate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamServerCertificateTimeoutsOutputReference <a name="IamServerCertificateTimeoutsOutputReference" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import iam_server_certificate

iamServerCertificate.IamServerCertificateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeouts">IamServerCertificateTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IamServerCertificateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.iamServerCertificate.IamServerCertificateTimeouts">IamServerCertificateTimeouts</a>]

---



