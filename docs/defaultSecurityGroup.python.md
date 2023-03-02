# `defaultSecurityGroup` Submodule <a name="`defaultSecurityGroup` Submodule" id="@cdktf/provider-aws.defaultSecurityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultSecurityGroup <a name="DefaultSecurityGroup" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_security_group aws_default_security_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_security_group

defaultSecurityGroup.DefaultSecurityGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  egress: typing.Union[IResolvable, typing.List[DefaultSecurityGroupEgress]] = None,
  id: str = None,
  ingress: typing.Union[IResolvable, typing.List[DefaultSecurityGroupIngress]] = None,
  revoke_rules_on_delete: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  vpc_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.egress">egress</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#egress DefaultSecurityGroup#egress}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#id DefaultSecurityGroup#id}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.ingress">ingress</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ingress DefaultSecurityGroup#ingress}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.revokeRulesOnDelete">revoke_rules_on_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#revoke_rules_on_delete DefaultSecurityGroup#revoke_rules_on_delete}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#tags DefaultSecurityGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#tags_all DefaultSecurityGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#vpc_id DefaultSecurityGroup#vpc_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.egress"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#egress DefaultSecurityGroup#egress}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#id DefaultSecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.ingress"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ingress DefaultSecurityGroup#ingress}.

---

##### `revoke_rules_on_delete`<sup>Optional</sup> <a name="revoke_rules_on_delete" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.revokeRulesOnDelete"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#revoke_rules_on_delete DefaultSecurityGroup#revoke_rules_on_delete}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#tags DefaultSecurityGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#tags_all DefaultSecurityGroup#tags_all}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#vpc_id DefaultSecurityGroup#vpc_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.putEgress">put_egress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.putIngress">put_ingress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetEgress">reset_egress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetIngress">reset_ingress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetRevokeRulesOnDelete">reset_revoke_rules_on_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_egress` <a name="put_egress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.putEgress"></a>

```python
def put_egress(
  value: typing.Union[IResolvable, typing.List[DefaultSecurityGroupEgress]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.putEgress.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>]]

---

##### `put_ingress` <a name="put_ingress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.putIngress"></a>

```python
def put_ingress(
  value: typing.Union[IResolvable, typing.List[DefaultSecurityGroupIngress]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.putIngress.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>]]

---

##### `reset_egress` <a name="reset_egress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetEgress"></a>

```python
def reset_egress() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ingress` <a name="reset_ingress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetIngress"></a>

```python
def reset_ingress() -> None
```

##### `reset_revoke_rules_on_delete` <a name="reset_revoke_rules_on_delete" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetRevokeRulesOnDelete"></a>

```python
def reset_revoke_rules_on_delete() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import default_security_group

defaultSecurityGroup.DefaultSecurityGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import default_security_group

defaultSecurityGroup.DefaultSecurityGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import default_security_group

defaultSecurityGroup.DefaultSecurityGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList">DefaultSecurityGroupEgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList">DefaultSecurityGroupIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.egressInput">egress_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.ingressInput">ingress_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.revokeRulesOnDeleteInput">revoke_rules_on_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.revokeRulesOnDelete">revoke_rules_on_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.egress"></a>

```python
egress: DefaultSecurityGroupEgressList
```

- *Type:* <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList">DefaultSecurityGroupEgressList</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.ingress"></a>

```python
ingress: DefaultSecurityGroupIngressList
```

- *Type:* <a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList">DefaultSecurityGroupIngressList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `egress_input`<sup>Optional</sup> <a name="egress_input" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.egressInput"></a>

```python
egress_input: typing.Union[IResolvable, typing.List[DefaultSecurityGroupEgress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingress_input`<sup>Optional</sup> <a name="ingress_input" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.ingressInput"></a>

```python
ingress_input: typing.Union[IResolvable, typing.List[DefaultSecurityGroupIngress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>]]

---

##### `revoke_rules_on_delete_input`<sup>Optional</sup> <a name="revoke_rules_on_delete_input" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.revokeRulesOnDeleteInput"></a>

```python
revoke_rules_on_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `revoke_rules_on_delete`<sup>Required</sup> <a name="revoke_rules_on_delete" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.revokeRulesOnDelete"></a>

```python
revoke_rules_on_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultSecurityGroupConfig <a name="DefaultSecurityGroupConfig" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_security_group

defaultSecurityGroup.DefaultSecurityGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  egress: typing.Union[IResolvable, typing.List[DefaultSecurityGroupEgress]] = None,
  id: str = None,
  ingress: typing.Union[IResolvable, typing.List[DefaultSecurityGroupIngress]] = None,
  revoke_rules_on_delete: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.egress">egress</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#egress DefaultSecurityGroup#egress}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#id DefaultSecurityGroup#id}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.ingress">ingress</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ingress DefaultSecurityGroup#ingress}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.revokeRulesOnDelete">revoke_rules_on_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#revoke_rules_on_delete DefaultSecurityGroup#revoke_rules_on_delete}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#tags DefaultSecurityGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#tags_all DefaultSecurityGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#vpc_id DefaultSecurityGroup#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.egress"></a>

```python
egress: typing.Union[IResolvable, typing.List[DefaultSecurityGroupEgress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#egress DefaultSecurityGroup#egress}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#id DefaultSecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.ingress"></a>

```python
ingress: typing.Union[IResolvable, typing.List[DefaultSecurityGroupIngress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ingress DefaultSecurityGroup#ingress}.

---

##### `revoke_rules_on_delete`<sup>Optional</sup> <a name="revoke_rules_on_delete" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.revokeRulesOnDelete"></a>

```python
revoke_rules_on_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#revoke_rules_on_delete DefaultSecurityGroup#revoke_rules_on_delete}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#tags DefaultSecurityGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#tags_all DefaultSecurityGroup#tags_all}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#vpc_id DefaultSecurityGroup#vpc_id}.

---

### DefaultSecurityGroupEgress <a name="DefaultSecurityGroupEgress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_security_group

defaultSecurityGroup.DefaultSecurityGroupEgress(
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
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.cidrBlocks">cidr_blocks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#cidr_blocks DefaultSecurityGroup#cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#description DefaultSecurityGroup#description}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#from_port DefaultSecurityGroup#from_port}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.ipv6CidrBlocks">ipv6_cidr_blocks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.prefixListIds">prefix_list_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#protocol DefaultSecurityGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#security_groups DefaultSecurityGroup#security_groups}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.selfAttribute">self_attribute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#self DefaultSecurityGroup#self}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#to_port DefaultSecurityGroup#to_port}. |

---

##### `cidr_blocks`<sup>Optional</sup> <a name="cidr_blocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.cidrBlocks"></a>

```python
cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#cidr_blocks DefaultSecurityGroup#cidr_blocks}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#description DefaultSecurityGroup#description}.

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#from_port DefaultSecurityGroup#from_port}.

---

##### `ipv6_cidr_blocks`<sup>Optional</sup> <a name="ipv6_cidr_blocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.ipv6CidrBlocks"></a>

```python
ipv6_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}.

---

##### `prefix_list_ids`<sup>Optional</sup> <a name="prefix_list_ids" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.prefixListIds"></a>

```python
prefix_list_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#protocol DefaultSecurityGroup#protocol}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#security_groups DefaultSecurityGroup#security_groups}.

---

##### `self_attribute`<sup>Optional</sup> <a name="self_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.selfAttribute"></a>

```python
self_attribute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#self DefaultSecurityGroup#self}.

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#to_port DefaultSecurityGroup#to_port}.

---

### DefaultSecurityGroupIngress <a name="DefaultSecurityGroupIngress" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_security_group

defaultSecurityGroup.DefaultSecurityGroupIngress(
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
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.cidrBlocks">cidr_blocks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#cidr_blocks DefaultSecurityGroup#cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#description DefaultSecurityGroup#description}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#from_port DefaultSecurityGroup#from_port}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.ipv6CidrBlocks">ipv6_cidr_blocks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.prefixListIds">prefix_list_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#protocol DefaultSecurityGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#security_groups DefaultSecurityGroup#security_groups}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.selfAttribute">self_attribute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#self DefaultSecurityGroup#self}. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#to_port DefaultSecurityGroup#to_port}. |

---

##### `cidr_blocks`<sup>Optional</sup> <a name="cidr_blocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.cidrBlocks"></a>

```python
cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#cidr_blocks DefaultSecurityGroup#cidr_blocks}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#description DefaultSecurityGroup#description}.

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#from_port DefaultSecurityGroup#from_port}.

---

##### `ipv6_cidr_blocks`<sup>Optional</sup> <a name="ipv6_cidr_blocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.ipv6CidrBlocks"></a>

```python
ipv6_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}.

---

##### `prefix_list_ids`<sup>Optional</sup> <a name="prefix_list_ids" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.prefixListIds"></a>

```python
prefix_list_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#protocol DefaultSecurityGroup#protocol}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#security_groups DefaultSecurityGroup#security_groups}.

---

##### `self_attribute`<sup>Optional</sup> <a name="self_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.selfAttribute"></a>

```python
self_attribute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#self DefaultSecurityGroup#self}.

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_security_group#to_port DefaultSecurityGroup#to_port}.

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultSecurityGroupEgressList <a name="DefaultSecurityGroupEgressList" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_security_group

defaultSecurityGroup.DefaultSecurityGroupEgressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DefaultSecurityGroupEgressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DefaultSecurityGroupEgress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>]]

---


### DefaultSecurityGroupEgressOutputReference <a name="DefaultSecurityGroupEgressOutputReference" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_security_group

defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetCidrBlocks">reset_cidr_blocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetIpv6CidrBlocks">reset_ipv6_cidr_blocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetPrefixListIds">reset_prefix_list_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetSelfAttribute">reset_self_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr_blocks` <a name="reset_cidr_blocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetCidrBlocks"></a>

```python
def reset_cidr_blocks() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_from_port` <a name="reset_from_port" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_ipv6_cidr_blocks` <a name="reset_ipv6_cidr_blocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetIpv6CidrBlocks"></a>

```python
def reset_ipv6_cidr_blocks() -> None
```

##### `reset_prefix_list_ids` <a name="reset_prefix_list_ids" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetPrefixListIds"></a>

```python
def reset_prefix_list_ids() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_self_attribute` <a name="reset_self_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetSelfAttribute"></a>

```python
def reset_self_attribute() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.resetToPort"></a>

```python
def reset_to_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.cidrBlocksInput">cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.ipv6CidrBlocksInput">ipv6_cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.prefixListIdsInput">prefix_list_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.selfAttributeInput">self_attribute_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.cidrBlocks">cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.ipv6CidrBlocks">ipv6_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.prefixListIds">prefix_list_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.selfAttribute">self_attribute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_blocks_input`<sup>Optional</sup> <a name="cidr_blocks_input" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.cidrBlocksInput"></a>

```python
cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidr_blocks_input`<sup>Optional</sup> <a name="ipv6_cidr_blocks_input" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.ipv6CidrBlocksInput"></a>

```python
ipv6_cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prefix_list_ids_input`<sup>Optional</sup> <a name="prefix_list_ids_input" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.prefixListIdsInput"></a>

```python
prefix_list_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `self_attribute_input`<sup>Optional</sup> <a name="self_attribute_input" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.selfAttributeInput"></a>

```python
self_attribute_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cidr_blocks`<sup>Required</sup> <a name="cidr_blocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.cidrBlocks"></a>

```python
cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidr_blocks`<sup>Required</sup> <a name="ipv6_cidr_blocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.ipv6CidrBlocks"></a>

```python
ipv6_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prefix_list_ids`<sup>Required</sup> <a name="prefix_list_ids" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.prefixListIds"></a>

```python
prefix_list_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `self_attribute`<sup>Required</sup> <a name="self_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.selfAttribute"></a>

```python
self_attribute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgressOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DefaultSecurityGroupEgress, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupEgress">DefaultSecurityGroupEgress</a>, cdktf.IResolvable]

---


### DefaultSecurityGroupIngressList <a name="DefaultSecurityGroupIngressList" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_security_group

defaultSecurityGroup.DefaultSecurityGroupIngressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DefaultSecurityGroupIngressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DefaultSecurityGroupIngress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>]]

---


### DefaultSecurityGroupIngressOutputReference <a name="DefaultSecurityGroupIngressOutputReference" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_security_group

defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetCidrBlocks">reset_cidr_blocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetIpv6CidrBlocks">reset_ipv6_cidr_blocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetPrefixListIds">reset_prefix_list_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetSelfAttribute">reset_self_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr_blocks` <a name="reset_cidr_blocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetCidrBlocks"></a>

```python
def reset_cidr_blocks() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_from_port` <a name="reset_from_port" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_ipv6_cidr_blocks` <a name="reset_ipv6_cidr_blocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetIpv6CidrBlocks"></a>

```python
def reset_ipv6_cidr_blocks() -> None
```

##### `reset_prefix_list_ids` <a name="reset_prefix_list_ids" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetPrefixListIds"></a>

```python
def reset_prefix_list_ids() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_self_attribute` <a name="reset_self_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetSelfAttribute"></a>

```python
def reset_self_attribute() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.resetToPort"></a>

```python
def reset_to_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.cidrBlocksInput">cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.ipv6CidrBlocksInput">ipv6_cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.prefixListIdsInput">prefix_list_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.selfAttributeInput">self_attribute_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.cidrBlocks">cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.ipv6CidrBlocks">ipv6_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.prefixListIds">prefix_list_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.selfAttribute">self_attribute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_blocks_input`<sup>Optional</sup> <a name="cidr_blocks_input" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.cidrBlocksInput"></a>

```python
cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidr_blocks_input`<sup>Optional</sup> <a name="ipv6_cidr_blocks_input" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.ipv6CidrBlocksInput"></a>

```python
ipv6_cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prefix_list_ids_input`<sup>Optional</sup> <a name="prefix_list_ids_input" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.prefixListIdsInput"></a>

```python
prefix_list_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `self_attribute_input`<sup>Optional</sup> <a name="self_attribute_input" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.selfAttributeInput"></a>

```python
self_attribute_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cidr_blocks`<sup>Required</sup> <a name="cidr_blocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.cidrBlocks"></a>

```python
cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidr_blocks`<sup>Required</sup> <a name="ipv6_cidr_blocks" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.ipv6CidrBlocks"></a>

```python
ipv6_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `prefix_list_ids`<sup>Required</sup> <a name="prefix_list_ids" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.prefixListIds"></a>

```python
prefix_list_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `self_attribute`<sup>Required</sup> <a name="self_attribute" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.selfAttribute"></a>

```python
self_attribute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngressOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DefaultSecurityGroupIngress, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.defaultSecurityGroup.DefaultSecurityGroupIngress">DefaultSecurityGroupIngress</a>, cdktf.IResolvable]

---



