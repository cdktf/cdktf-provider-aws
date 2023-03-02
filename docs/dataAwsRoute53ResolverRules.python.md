# `dataAwsRoute53ResolverRules` Submodule <a name="`dataAwsRoute53ResolverRules` Submodule" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute53ResolverRules <a name="DataAwsRoute53ResolverRules" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules aws_route53_resolver_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_rules

dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  name_regex: str = None,
  owner_id: str = None,
  resolver_endpoint_id: str = None,
  rule_type: str = None,
  share_status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#id DataAwsRoute53ResolverRules#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.nameRegex">name_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#name_regex DataAwsRoute53ResolverRules#name_regex}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.ownerId">owner_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#owner_id DataAwsRoute53ResolverRules#owner_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.resolverEndpointId">resolver_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#resolver_endpoint_id DataAwsRoute53ResolverRules#resolver_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.ruleType">rule_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#rule_type DataAwsRoute53ResolverRules#rule_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.shareStatus">share_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#share_status DataAwsRoute53ResolverRules#share_status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#id DataAwsRoute53ResolverRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name_regex`<sup>Optional</sup> <a name="name_regex" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.nameRegex"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#name_regex DataAwsRoute53ResolverRules#name_regex}.

---

##### `owner_id`<sup>Optional</sup> <a name="owner_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.ownerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#owner_id DataAwsRoute53ResolverRules#owner_id}.

---

##### `resolver_endpoint_id`<sup>Optional</sup> <a name="resolver_endpoint_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.resolverEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#resolver_endpoint_id DataAwsRoute53ResolverRules#resolver_endpoint_id}.

---

##### `rule_type`<sup>Optional</sup> <a name="rule_type" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.ruleType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#rule_type DataAwsRoute53ResolverRules#rule_type}.

---

##### `share_status`<sup>Optional</sup> <a name="share_status" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.shareStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#share_status DataAwsRoute53ResolverRules#share_status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetNameRegex">reset_name_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetOwnerId">reset_owner_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetResolverEndpointId">reset_resolver_endpoint_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetRuleType">reset_rule_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetShareStatus">reset_share_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name_regex` <a name="reset_name_regex" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetNameRegex"></a>

```python
def reset_name_regex() -> None
```

##### `reset_owner_id` <a name="reset_owner_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetOwnerId"></a>

```python
def reset_owner_id() -> None
```

##### `reset_resolver_endpoint_id` <a name="reset_resolver_endpoint_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetResolverEndpointId"></a>

```python
def reset_resolver_endpoint_id() -> None
```

##### `reset_rule_type` <a name="reset_rule_type" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetRuleType"></a>

```python
def reset_rule_type() -> None
```

##### `reset_share_status` <a name="reset_share_status" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetShareStatus"></a>

```python
def reset_share_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_rules

dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_rules

dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_rules

dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.resolverRuleIds">resolver_rule_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.nameRegexInput">name_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ownerIdInput">owner_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.resolverEndpointIdInput">resolver_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ruleTypeInput">rule_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.shareStatusInput">share_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.nameRegex">name_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.resolverEndpointId">resolver_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ruleType">rule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.shareStatus">share_status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `resolver_rule_ids`<sup>Required</sup> <a name="resolver_rule_ids" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.resolverRuleIds"></a>

```python
resolver_rule_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_regex_input`<sup>Optional</sup> <a name="name_regex_input" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.nameRegexInput"></a>

```python
name_regex_input: str
```

- *Type:* str

---

##### `owner_id_input`<sup>Optional</sup> <a name="owner_id_input" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ownerIdInput"></a>

```python
owner_id_input: str
```

- *Type:* str

---

##### `resolver_endpoint_id_input`<sup>Optional</sup> <a name="resolver_endpoint_id_input" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.resolverEndpointIdInput"></a>

```python
resolver_endpoint_id_input: str
```

- *Type:* str

---

##### `rule_type_input`<sup>Optional</sup> <a name="rule_type_input" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ruleTypeInput"></a>

```python
rule_type_input: str
```

- *Type:* str

---

##### `share_status_input`<sup>Optional</sup> <a name="share_status_input" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.shareStatusInput"></a>

```python
share_status_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name_regex`<sup>Required</sup> <a name="name_regex" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.nameRegex"></a>

```python
name_regex: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `resolver_endpoint_id`<sup>Required</sup> <a name="resolver_endpoint_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.resolverEndpointId"></a>

```python
resolver_endpoint_id: str
```

- *Type:* str

---

##### `rule_type`<sup>Required</sup> <a name="rule_type" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ruleType"></a>

```python
rule_type: str
```

- *Type:* str

---

##### `share_status`<sup>Required</sup> <a name="share_status" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.shareStatus"></a>

```python
share_status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRoute53ResolverRulesConfig <a name="DataAwsRoute53ResolverRulesConfig" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_rules

dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  name_regex: str = None,
  owner_id: str = None,
  resolver_endpoint_id: str = None,
  rule_type: str = None,
  share_status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#id DataAwsRoute53ResolverRules#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.nameRegex">name_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#name_regex DataAwsRoute53ResolverRules#name_regex}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.ownerId">owner_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#owner_id DataAwsRoute53ResolverRules#owner_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.resolverEndpointId">resolver_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#resolver_endpoint_id DataAwsRoute53ResolverRules#resolver_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.ruleType">rule_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#rule_type DataAwsRoute53ResolverRules#rule_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.shareStatus">share_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#share_status DataAwsRoute53ResolverRules#share_status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#id DataAwsRoute53ResolverRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name_regex`<sup>Optional</sup> <a name="name_regex" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.nameRegex"></a>

```python
name_regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#name_regex DataAwsRoute53ResolverRules#name_regex}.

---

##### `owner_id`<sup>Optional</sup> <a name="owner_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#owner_id DataAwsRoute53ResolverRules#owner_id}.

---

##### `resolver_endpoint_id`<sup>Optional</sup> <a name="resolver_endpoint_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.resolverEndpointId"></a>

```python
resolver_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#resolver_endpoint_id DataAwsRoute53ResolverRules#resolver_endpoint_id}.

---

##### `rule_type`<sup>Optional</sup> <a name="rule_type" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.ruleType"></a>

```python
rule_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#rule_type DataAwsRoute53ResolverRules#rule_type}.

---

##### `share_status`<sup>Optional</sup> <a name="share_status" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.shareStatus"></a>

```python
share_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#share_status DataAwsRoute53ResolverRules#share_status}.

---



