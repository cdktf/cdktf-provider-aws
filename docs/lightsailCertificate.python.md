# `lightsailCertificate` Submodule <a name="`lightsailCertificate` Submodule" id="@cdktf/provider-aws.lightsailCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailCertificate <a name="LightsailCertificate" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate aws_lightsail_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_certificate

lightsailCertificate.LightsailCertificate(
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
  domain_name: str = None,
  id: str = None,
  region: str = None,
  subject_alternative_names: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#name LightsailCertificate#name}. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#domain_name LightsailCertificate#domain_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#id LightsailCertificate#id}. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.subjectAlternativeNames">subject_alternative_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#subject_alternative_names LightsailCertificate#subject_alternative_names}. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#tags LightsailCertificate#tags}. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#tags_all LightsailCertificate#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#name LightsailCertificate#name}.

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#domain_name LightsailCertificate#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#id LightsailCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#region LightsailCertificate#region}

---

##### `subject_alternative_names`<sup>Optional</sup> <a name="subject_alternative_names" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.subjectAlternativeNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#subject_alternative_names LightsailCertificate#subject_alternative_names}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#tags LightsailCertificate#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#tags_all LightsailCertificate#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.resetDomainName">reset_domain_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.resetSubjectAlternativeNames">reset_subject_alternative_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_domain_name` <a name="reset_domain_name" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.resetDomainName"></a>

```python
def reset_domain_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_subject_alternative_names` <a name="reset_subject_alternative_names" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.resetSubjectAlternativeNames"></a>

```python
def reset_subject_alternative_names() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LightsailCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_certificate

lightsailCertificate.LightsailCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_certificate

lightsailCertificate.LightsailCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_certificate

lightsailCertificate.LightsailCertificate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_certificate

lightsailCertificate.LightsailCertificate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LightsailCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LightsailCertificate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LightsailCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LightsailCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.domainValidationOptions">domain_validation_options</a></code> | <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList">LightsailCertificateDomainValidationOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.subjectAlternativeNamesInput">subject_alternative_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `domain_validation_options`<sup>Required</sup> <a name="domain_validation_options" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.domainValidationOptions"></a>

```python
domain_validation_options: LightsailCertificateDomainValidationOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList">LightsailCertificateDomainValidationOptionsList</a>

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `subject_alternative_names_input`<sup>Optional</sup> <a name="subject_alternative_names_input" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.subjectAlternativeNamesInput"></a>

```python
subject_alternative_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `subject_alternative_names`<sup>Required</sup> <a name="subject_alternative_names" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailCertificateConfig <a name="LightsailCertificateConfig" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_certificate

lightsailCertificate.LightsailCertificateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  domain_name: str = None,
  id: str = None,
  region: str = None,
  subject_alternative_names: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#name LightsailCertificate#name}. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#domain_name LightsailCertificate#domain_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#id LightsailCertificate#id}. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#subject_alternative_names LightsailCertificate#subject_alternative_names}. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#tags LightsailCertificate#tags}. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#tags_all LightsailCertificate#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#name LightsailCertificate#name}.

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#domain_name LightsailCertificate#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#id LightsailCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#region LightsailCertificate#region}

---

##### `subject_alternative_names`<sup>Optional</sup> <a name="subject_alternative_names" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#subject_alternative_names LightsailCertificate#subject_alternative_names}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#tags LightsailCertificate#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_certificate#tags_all LightsailCertificate#tags_all}.

---

### LightsailCertificateDomainValidationOptions <a name="LightsailCertificateDomainValidationOptions" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_certificate

lightsailCertificate.LightsailCertificateDomainValidationOptions()
```


## Classes <a name="Classes" id="Classes"></a>

### LightsailCertificateDomainValidationOptionsList <a name="LightsailCertificateDomainValidationOptionsList" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_certificate

lightsailCertificate.LightsailCertificateDomainValidationOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LightsailCertificateDomainValidationOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### LightsailCertificateDomainValidationOptionsOutputReference <a name="LightsailCertificateDomainValidationOptionsOutputReference" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_certificate

lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.property.resourceRecordName">resource_record_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.property.resourceRecordType">resource_record_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.property.resourceRecordValue">resource_record_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptions">LightsailCertificateDomainValidationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `resource_record_name`<sup>Required</sup> <a name="resource_record_name" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.property.resourceRecordName"></a>

```python
resource_record_name: str
```

- *Type:* str

---

##### `resource_record_type`<sup>Required</sup> <a name="resource_record_type" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.property.resourceRecordType"></a>

```python
resource_record_type: str
```

- *Type:* str

---

##### `resource_record_value`<sup>Required</sup> <a name="resource_record_value" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.property.resourceRecordValue"></a>

```python
resource_record_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: LightsailCertificateDomainValidationOptions
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailCertificate.LightsailCertificateDomainValidationOptions">LightsailCertificateDomainValidationOptions</a>

---



