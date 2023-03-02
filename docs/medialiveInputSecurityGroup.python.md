# `medialiveInputSecurityGroup` Submodule <a name="`medialiveInputSecurityGroup` Submodule" id="@cdktf/provider-aws.medialiveInputSecurityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveInputSecurityGroup <a name="MedialiveInputSecurityGroup" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group aws_medialive_input_security_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import medialive_input_security_group

medialiveInputSecurityGroup.MedialiveInputSecurityGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  whitelist_rules: typing.Union[IResolvable, typing.List[MedialiveInputSecurityGroupWhitelistRules]],
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: MedialiveInputSecurityGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.whitelistRules">whitelist_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>]]</code> | whitelist_rules block. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#id MedialiveInputSecurityGroup#id}. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#tags MedialiveInputSecurityGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#tags_all MedialiveInputSecurityGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts">MedialiveInputSecurityGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `whitelist_rules`<sup>Required</sup> <a name="whitelist_rules" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.whitelistRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>]]

whitelist_rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#whitelist_rules MedialiveInputSecurityGroup#whitelist_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#id MedialiveInputSecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#tags MedialiveInputSecurityGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#tags_all MedialiveInputSecurityGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts">MedialiveInputSecurityGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#timeouts MedialiveInputSecurityGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.putWhitelistRules">put_whitelist_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#create MedialiveInputSecurityGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#delete MedialiveInputSecurityGroup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#update MedialiveInputSecurityGroup#update}.

---

##### `put_whitelist_rules` <a name="put_whitelist_rules" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.putWhitelistRules"></a>

```python
def put_whitelist_rules(
  value: typing.Union[IResolvable, typing.List[MedialiveInputSecurityGroupWhitelistRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.putWhitelistRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import medialive_input_security_group

medialiveInputSecurityGroup.MedialiveInputSecurityGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import medialive_input_security_group

medialiveInputSecurityGroup.MedialiveInputSecurityGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import medialive_input_security_group

medialiveInputSecurityGroup.MedialiveInputSecurityGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.inputs">inputs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference">MedialiveInputSecurityGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.whitelistRules">whitelist_rules</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList">MedialiveInputSecurityGroupWhitelistRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts">MedialiveInputSecurityGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.whitelistRulesInput">whitelist_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.inputs"></a>

```python
inputs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.timeouts"></a>

```python
timeouts: MedialiveInputSecurityGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference">MedialiveInputSecurityGroupTimeoutsOutputReference</a>

---

##### `whitelist_rules`<sup>Required</sup> <a name="whitelist_rules" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.whitelistRules"></a>

```python
whitelist_rules: MedialiveInputSecurityGroupWhitelistRulesList
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList">MedialiveInputSecurityGroupWhitelistRulesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[MedialiveInputSecurityGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts">MedialiveInputSecurityGroupTimeouts</a>, cdktf.IResolvable]

---

##### `whitelist_rules_input`<sup>Optional</sup> <a name="whitelist_rules_input" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.whitelistRulesInput"></a>

```python
whitelist_rules_input: typing.Union[IResolvable, typing.List[MedialiveInputSecurityGroupWhitelistRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveInputSecurityGroupConfig <a name="MedialiveInputSecurityGroupConfig" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import medialive_input_security_group

medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  whitelist_rules: typing.Union[IResolvable, typing.List[MedialiveInputSecurityGroupWhitelistRules]],
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: MedialiveInputSecurityGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.whitelistRules">whitelist_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>]]</code> | whitelist_rules block. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#id MedialiveInputSecurityGroup#id}. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#tags MedialiveInputSecurityGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#tags_all MedialiveInputSecurityGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts">MedialiveInputSecurityGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `whitelist_rules`<sup>Required</sup> <a name="whitelist_rules" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.whitelistRules"></a>

```python
whitelist_rules: typing.Union[IResolvable, typing.List[MedialiveInputSecurityGroupWhitelistRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>]]

whitelist_rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#whitelist_rules MedialiveInputSecurityGroup#whitelist_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#id MedialiveInputSecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#tags MedialiveInputSecurityGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#tags_all MedialiveInputSecurityGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupConfig.property.timeouts"></a>

```python
timeouts: MedialiveInputSecurityGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts">MedialiveInputSecurityGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#timeouts MedialiveInputSecurityGroup#timeouts}

---

### MedialiveInputSecurityGroupTimeouts <a name="MedialiveInputSecurityGroupTimeouts" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import medialive_input_security_group

medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#create MedialiveInputSecurityGroup#create}. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#delete MedialiveInputSecurityGroup#delete}. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#update MedialiveInputSecurityGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#create MedialiveInputSecurityGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#delete MedialiveInputSecurityGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#update MedialiveInputSecurityGroup#update}.

---

### MedialiveInputSecurityGroupWhitelistRules <a name="MedialiveInputSecurityGroupWhitelistRules" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import medialive_input_security_group

medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules(
  cidr: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules.property.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#cidr MedialiveInputSecurityGroup#cidr}. |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/medialive_input_security_group#cidr MedialiveInputSecurityGroup#cidr}.

---

## Classes <a name="Classes" id="Classes"></a>

### MedialiveInputSecurityGroupTimeoutsOutputReference <a name="MedialiveInputSecurityGroupTimeoutsOutputReference" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import medialive_input_security_group

medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts">MedialiveInputSecurityGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[MedialiveInputSecurityGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupTimeouts">MedialiveInputSecurityGroupTimeouts</a>, cdktf.IResolvable]

---


### MedialiveInputSecurityGroupWhitelistRulesList <a name="MedialiveInputSecurityGroupWhitelistRulesList" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import medialive_input_security_group

medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MedialiveInputSecurityGroupWhitelistRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MedialiveInputSecurityGroupWhitelistRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>]]

---


### MedialiveInputSecurityGroupWhitelistRulesOutputReference <a name="MedialiveInputSecurityGroupWhitelistRulesOutputReference" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import medialive_input_security_group

medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[MedialiveInputSecurityGroupWhitelistRules, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.medialiveInputSecurityGroup.MedialiveInputSecurityGroupWhitelistRules">MedialiveInputSecurityGroupWhitelistRules</a>, cdktf.IResolvable]

---



