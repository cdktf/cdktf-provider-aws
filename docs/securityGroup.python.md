# `securityGroup` Submodule <a name="`securityGroup` Submodule" id="@cdktf/provider-aws.securityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityGroup <a name="SecurityGroup" id="@cdktf/provider-aws.securityGroup.SecurityGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/security_group aws_security_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import security_group

securityGroup.SecurityGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str = None,
  egress: typing.Union[IResolvable, typing.List[SecurityGroupEgress]] = None,
  id: str = None,
  ingress: typing.Union[IResolvable, typing.List[SecurityGroupIngress]] = None,
  name: str = None,
  name_prefix: str = None,
  revoke_rules_on_delete: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: SecurityGroupTimeouts = None,
  vpc_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#description SecurityGroup#description}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.egress">egress</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#egress SecurityGroup#egress}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#id SecurityGroup#id}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.ingress">ingress</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#ingress SecurityGroup#ingress}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#name SecurityGroup#name}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#name_prefix SecurityGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.revokeRulesOnDelete">revoke_rules_on_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#revoke_rules_on_delete SecurityGroup#revoke_rules_on_delete}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#tags SecurityGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#tags_all SecurityGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts">SecurityGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#vpc_id SecurityGroup#vpc_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#description SecurityGroup#description}.

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.egress"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#egress SecurityGroup#egress}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#id SecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.ingress"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#ingress SecurityGroup#ingress}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#name SecurityGroup#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#name_prefix SecurityGroup#name_prefix}.

---

##### `revoke_rules_on_delete`<sup>Optional</sup> <a name="revoke_rules_on_delete" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.revokeRulesOnDelete"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#revoke_rules_on_delete SecurityGroup#revoke_rules_on_delete}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#tags SecurityGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#tags_all SecurityGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts">SecurityGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#timeouts SecurityGroup#timeouts}

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-aws.securityGroup.SecurityGroup.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#vpc_id SecurityGroup#vpc_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.putEgress">put_egress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.putIngress">put_ingress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetEgress">reset_egress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetIngress">reset_ingress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetRevokeRulesOnDelete">reset_revoke_rules_on_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securityGroup.SecurityGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.securityGroup.SecurityGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securityGroup.SecurityGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityGroup.SecurityGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.securityGroup.SecurityGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.securityGroup.SecurityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.securityGroup.SecurityGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.securityGroup.SecurityGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_egress` <a name="put_egress" id="@cdktf/provider-aws.securityGroup.SecurityGroup.putEgress"></a>

```python
def put_egress(
  value: typing.Union[IResolvable, typing.List[SecurityGroupEgress]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityGroup.SecurityGroup.putEgress.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>]]

---

##### `put_ingress` <a name="put_ingress" id="@cdktf/provider-aws.securityGroup.SecurityGroup.putIngress"></a>

```python
def put_ingress(
  value: typing.Union[IResolvable, typing.List[SecurityGroupIngress]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityGroup.SecurityGroup.putIngress.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.securityGroup.SecurityGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.securityGroup.SecurityGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#create SecurityGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.securityGroup.SecurityGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#delete SecurityGroup#delete}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_egress` <a name="reset_egress" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetEgress"></a>

```python
def reset_egress() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ingress` <a name="reset_ingress" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetIngress"></a>

```python
def reset_ingress() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_revoke_rules_on_delete` <a name="reset_revoke_rules_on_delete" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetRevokeRulesOnDelete"></a>

```python
def reset_revoke_rules_on_delete() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktf/provider-aws.securityGroup.SecurityGroup.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.securityGroup.SecurityGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import security_group

securityGroup.SecurityGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityGroup.SecurityGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.securityGroup.SecurityGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import security_group

securityGroup.SecurityGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityGroup.SecurityGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.securityGroup.SecurityGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import security_group

securityGroup.SecurityGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityGroup.SecurityGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList">SecurityGroupEgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList">SecurityGroupIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference">SecurityGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.egressInput">egress_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.ingressInput">ingress_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.revokeRulesOnDeleteInput">revoke_rules_on_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts">SecurityGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.revokeRulesOnDelete">revoke_rules_on_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.egress"></a>

```python
egress: SecurityGroupEgressList
```

- *Type:* <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList">SecurityGroupEgressList</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.ingress"></a>

```python
ingress: SecurityGroupIngressList
```

- *Type:* <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList">SecurityGroupIngressList</a>

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.timeouts"></a>

```python
timeouts: SecurityGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference">SecurityGroupTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `egress_input`<sup>Optional</sup> <a name="egress_input" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.egressInput"></a>

```python
egress_input: typing.Union[IResolvable, typing.List[SecurityGroupEgress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingress_input`<sup>Optional</sup> <a name="ingress_input" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.ingressInput"></a>

```python
ingress_input: typing.Union[IResolvable, typing.List[SecurityGroupIngress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `revoke_rules_on_delete_input`<sup>Optional</sup> <a name="revoke_rules_on_delete_input" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.revokeRulesOnDeleteInput"></a>

```python
revoke_rules_on_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[SecurityGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts">SecurityGroupTimeouts</a>, cdktf.IResolvable]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `revoke_rules_on_delete`<sup>Required</sup> <a name="revoke_rules_on_delete" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.revokeRulesOnDelete"></a>

```python
revoke_rules_on_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.securityGroup.SecurityGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityGroupConfig <a name="SecurityGroupConfig" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import security_group

securityGroup.SecurityGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str = None,
  egress: typing.Union[IResolvable, typing.List[SecurityGroupEgress]] = None,
  id: str = None,
  ingress: typing.Union[IResolvable, typing.List[SecurityGroupIngress]] = None,
  name: str = None,
  name_prefix: str = None,
  revoke_rules_on_delete: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: SecurityGroupTimeouts = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#description SecurityGroup#description}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.egress">egress</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#egress SecurityGroup#egress}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#id SecurityGroup#id}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.ingress">ingress</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#ingress SecurityGroup#ingress}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#name SecurityGroup#name}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#name_prefix SecurityGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.revokeRulesOnDelete">revoke_rules_on_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#revoke_rules_on_delete SecurityGroup#revoke_rules_on_delete}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#tags SecurityGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#tags_all SecurityGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts">SecurityGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#vpc_id SecurityGroup#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#description SecurityGroup#description}.

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.egress"></a>

```python
egress: typing.Union[IResolvable, typing.List[SecurityGroupEgress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#egress SecurityGroup#egress}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#id SecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.ingress"></a>

```python
ingress: typing.Union[IResolvable, typing.List[SecurityGroupIngress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#ingress SecurityGroup#ingress}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#name SecurityGroup#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#name_prefix SecurityGroup#name_prefix}.

---

##### `revoke_rules_on_delete`<sup>Optional</sup> <a name="revoke_rules_on_delete" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.revokeRulesOnDelete"></a>

```python
revoke_rules_on_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#revoke_rules_on_delete SecurityGroup#revoke_rules_on_delete}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#tags SecurityGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#tags_all SecurityGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.timeouts"></a>

```python
timeouts: SecurityGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts">SecurityGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#timeouts SecurityGroup#timeouts}

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-aws.securityGroup.SecurityGroupConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#vpc_id SecurityGroup#vpc_id}.

---

### SecurityGroupEgress <a name="SecurityGroupEgress" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import security_group

securityGroup.SecurityGroupEgress(
  cidr_blocks: typing.List[str] = None,
  description: str = None,
  from_port: typing.Union[int, float] = None,
  ipv6_cidr_blocks: typing.List[str] = None,
  prefix_list_ids: typing.List[str] = None,
  protocol: str = None,
  security_groups: typing.List[str] = None,
  self_attribute: typing.Union[bool, IResolvable] = None,
  to_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.cidrBlocks">cidr_blocks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#cidr_blocks SecurityGroup#cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#description SecurityGroup#description}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#from_port SecurityGroup#from_port}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.ipv6CidrBlocks">ipv6_cidr_blocks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.prefixListIds">prefix_list_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#prefix_list_ids SecurityGroup#prefix_list_ids}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#protocol SecurityGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#security_groups SecurityGroup#security_groups}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.selfAttribute">self_attribute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#self SecurityGroup#self}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#to_port SecurityGroup#to_port}. |

---

##### `cidr_blocks`<sup>Optional</sup> <a name="cidr_blocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.cidrBlocks"></a>

```python
cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#cidr_blocks SecurityGroup#cidr_blocks}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#description SecurityGroup#description}.

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#from_port SecurityGroup#from_port}.

---

##### `ipv6_cidr_blocks`<sup>Optional</sup> <a name="ipv6_cidr_blocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.ipv6CidrBlocks"></a>

```python
ipv6_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}.

---

##### `prefix_list_ids`<sup>Optional</sup> <a name="prefix_list_ids" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.prefixListIds"></a>

```python
prefix_list_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#prefix_list_ids SecurityGroup#prefix_list_ids}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#protocol SecurityGroup#protocol}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#security_groups SecurityGroup#security_groups}.

---

##### `self_attribute`<sup>Optional</sup> <a name="self_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.selfAttribute"></a>

```python
self_attribute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#self SecurityGroup#self}.

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgress.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#to_port SecurityGroup#to_port}.

---

### SecurityGroupIngress <a name="SecurityGroupIngress" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import security_group

securityGroup.SecurityGroupIngress(
  cidr_blocks: typing.List[str] = None,
  description: str = None,
  from_port: typing.Union[int, float] = None,
  ipv6_cidr_blocks: typing.List[str] = None,
  prefix_list_ids: typing.List[str] = None,
  protocol: str = None,
  security_groups: typing.List[str] = None,
  self_attribute: typing.Union[bool, IResolvable] = None,
  to_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.cidrBlocks">cidr_blocks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#cidr_blocks SecurityGroup#cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#description SecurityGroup#description}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#from_port SecurityGroup#from_port}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.ipv6CidrBlocks">ipv6_cidr_blocks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.prefixListIds">prefix_list_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#prefix_list_ids SecurityGroup#prefix_list_ids}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#protocol SecurityGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#security_groups SecurityGroup#security_groups}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.selfAttribute">self_attribute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#self SecurityGroup#self}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#to_port SecurityGroup#to_port}. |

---

##### `cidr_blocks`<sup>Optional</sup> <a name="cidr_blocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.cidrBlocks"></a>

```python
cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#cidr_blocks SecurityGroup#cidr_blocks}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#description SecurityGroup#description}.

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#from_port SecurityGroup#from_port}.

---

##### `ipv6_cidr_blocks`<sup>Optional</sup> <a name="ipv6_cidr_blocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.ipv6CidrBlocks"></a>

```python
ipv6_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#ipv6_cidr_blocks SecurityGroup#ipv6_cidr_blocks}.

---

##### `prefix_list_ids`<sup>Optional</sup> <a name="prefix_list_ids" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.prefixListIds"></a>

```python
prefix_list_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#prefix_list_ids SecurityGroup#prefix_list_ids}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#protocol SecurityGroup#protocol}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#security_groups SecurityGroup#security_groups}.

---

##### `self_attribute`<sup>Optional</sup> <a name="self_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.selfAttribute"></a>

```python
self_attribute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#self SecurityGroup#self}.

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngress.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#to_port SecurityGroup#to_port}.

---

### SecurityGroupTimeouts <a name="SecurityGroupTimeouts" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import security_group

securityGroup.SecurityGroupTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#create SecurityGroup#create}. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#delete SecurityGroup#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#create SecurityGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/security_group#delete SecurityGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityGroupEgressList <a name="SecurityGroupEgressList" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import security_group

securityGroup.SecurityGroupEgressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityGroupEgressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SecurityGroupEgress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>]]

---


### SecurityGroupEgressOutputReference <a name="SecurityGroupEgressOutputReference" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import security_group

securityGroup.SecurityGroupEgressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetCidrBlocks">reset_cidr_blocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetIpv6CidrBlocks">reset_ipv6_cidr_blocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetPrefixListIds">reset_prefix_list_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetSelfAttribute">reset_self_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr_blocks` <a name="reset_cidr_blocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetCidrBlocks"></a>

```python
def reset_cidr_blocks() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_from_port` <a name="reset_from_port" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_ipv6_cidr_blocks` <a name="reset_ipv6_cidr_blocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetIpv6CidrBlocks"></a>

```python
def reset_ipv6_cidr_blocks() -> None
```

##### `reset_prefix_list_ids` <a name="reset_prefix_list_ids" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetPrefixListIds"></a>

```python
def reset_prefix_list_ids() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_self_attribute` <a name="reset_self_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetSelfAttribute"></a>

```python
def reset_self_attribute() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.resetToPort"></a>

```python
def reset_to_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.cidrBlocksInput">cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.ipv6CidrBlocksInput">ipv6_cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.prefixListIdsInput">prefix_list_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.selfAttributeInput">self_attribute_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.cidrBlocks">cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.ipv6CidrBlocks">ipv6_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.prefixListIds">prefix_list_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.selfAttribute">self_attribute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_blocks_input`<sup>Optional</sup> <a name="cidr_blocks_input" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.cidrBlocksInput"></a>

```python
cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidr_blocks_input`<sup>Optional</sup> <a name="ipv6_cidr_blocks_input" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.ipv6CidrBlocksInput"></a>

```python
ipv6_cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prefix_list_ids_input`<sup>Optional</sup> <a name="prefix_list_ids_input" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.prefixListIdsInput"></a>

```python
prefix_list_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `self_attribute_input`<sup>Optional</sup> <a name="self_attribute_input" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.selfAttributeInput"></a>

```python
self_attribute_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cidr_blocks`<sup>Required</sup> <a name="cidr_blocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.cidrBlocks"></a>

```python
cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidr_blocks`<sup>Required</sup> <a name="ipv6_cidr_blocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.ipv6CidrBlocks"></a>

```python
ipv6_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prefix_list_ids`<sup>Required</sup> <a name="prefix_list_ids" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.prefixListIds"></a>

```python
prefix_list_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `self_attribute`<sup>Required</sup> <a name="self_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.selfAttribute"></a>

```python
self_attribute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securityGroup.SecurityGroupEgressOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SecurityGroupEgress, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupEgress">SecurityGroupEgress</a>, cdktf.IResolvable]

---


### SecurityGroupIngressList <a name="SecurityGroupIngressList" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import security_group

securityGroup.SecurityGroupIngressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecurityGroupIngressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SecurityGroupIngress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>]]

---


### SecurityGroupIngressOutputReference <a name="SecurityGroupIngressOutputReference" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import security_group

securityGroup.SecurityGroupIngressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetCidrBlocks">reset_cidr_blocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetIpv6CidrBlocks">reset_ipv6_cidr_blocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetPrefixListIds">reset_prefix_list_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetSelfAttribute">reset_self_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr_blocks` <a name="reset_cidr_blocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetCidrBlocks"></a>

```python
def reset_cidr_blocks() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_from_port` <a name="reset_from_port" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_ipv6_cidr_blocks` <a name="reset_ipv6_cidr_blocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetIpv6CidrBlocks"></a>

```python
def reset_ipv6_cidr_blocks() -> None
```

##### `reset_prefix_list_ids` <a name="reset_prefix_list_ids" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetPrefixListIds"></a>

```python
def reset_prefix_list_ids() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_self_attribute` <a name="reset_self_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetSelfAttribute"></a>

```python
def reset_self_attribute() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.resetToPort"></a>

```python
def reset_to_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.cidrBlocksInput">cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.ipv6CidrBlocksInput">ipv6_cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.prefixListIdsInput">prefix_list_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.selfAttributeInput">self_attribute_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.cidrBlocks">cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.ipv6CidrBlocks">ipv6_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.prefixListIds">prefix_list_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.selfAttribute">self_attribute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_blocks_input`<sup>Optional</sup> <a name="cidr_blocks_input" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.cidrBlocksInput"></a>

```python
cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidr_blocks_input`<sup>Optional</sup> <a name="ipv6_cidr_blocks_input" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.ipv6CidrBlocksInput"></a>

```python
ipv6_cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prefix_list_ids_input`<sup>Optional</sup> <a name="prefix_list_ids_input" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.prefixListIdsInput"></a>

```python
prefix_list_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `self_attribute_input`<sup>Optional</sup> <a name="self_attribute_input" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.selfAttributeInput"></a>

```python
self_attribute_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cidr_blocks`<sup>Required</sup> <a name="cidr_blocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.cidrBlocks"></a>

```python
cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidr_blocks`<sup>Required</sup> <a name="ipv6_cidr_blocks" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.ipv6CidrBlocks"></a>

```python
ipv6_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prefix_list_ids`<sup>Required</sup> <a name="prefix_list_ids" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.prefixListIds"></a>

```python
prefix_list_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `self_attribute`<sup>Required</sup> <a name="self_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.selfAttribute"></a>

```python
self_attribute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securityGroup.SecurityGroupIngressOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SecurityGroupIngress, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupIngress">SecurityGroupIngress</a>, cdktf.IResolvable]

---


### SecurityGroupTimeoutsOutputReference <a name="SecurityGroupTimeoutsOutputReference" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import security_group

securityGroup.SecurityGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts">SecurityGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securityGroup.SecurityGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SecurityGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.securityGroup.SecurityGroupTimeouts">SecurityGroupTimeouts</a>, cdktf.IResolvable]

---



