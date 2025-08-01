# `customerprofilesDomain` Submodule <a name="`customerprofilesDomain` Submodule" id="@cdktf/provider-aws.customerprofilesDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesDomain <a name="CustomerprofilesDomain" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain aws_customerprofiles_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomain(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_expiration_days: typing.Union[int, float],
  domain_name: str,
  dead_letter_queue_url: str = None,
  default_encryption_key: str = None,
  id: str = None,
  matching: CustomerprofilesDomainMatching = None,
  region: str = None,
  rule_based_matching: CustomerprofilesDomainRuleBasedMatching = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.defaultExpirationDays">default_expiration_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#default_expiration_days CustomerprofilesDomain#default_expiration_days}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#domain_name CustomerprofilesDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.deadLetterQueueUrl">dead_letter_queue_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#dead_letter_queue_url CustomerprofilesDomain#dead_letter_queue_url}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.defaultEncryptionKey">default_encryption_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#default_encryption_key CustomerprofilesDomain#default_encryption_key}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#id CustomerprofilesDomain#id}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.matching">matching</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a></code> | matching block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.ruleBasedMatching">rule_based_matching</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a></code> | rule_based_matching block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#tags CustomerprofilesDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#tags_all CustomerprofilesDomain#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_expiration_days`<sup>Required</sup> <a name="default_expiration_days" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.defaultExpirationDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#default_expiration_days CustomerprofilesDomain#default_expiration_days}.

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#domain_name CustomerprofilesDomain#domain_name}.

---

##### `dead_letter_queue_url`<sup>Optional</sup> <a name="dead_letter_queue_url" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.deadLetterQueueUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#dead_letter_queue_url CustomerprofilesDomain#dead_letter_queue_url}.

---

##### `default_encryption_key`<sup>Optional</sup> <a name="default_encryption_key" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.defaultEncryptionKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#default_encryption_key CustomerprofilesDomain#default_encryption_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#id CustomerprofilesDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `matching`<sup>Optional</sup> <a name="matching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.matching"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a>

matching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#matching CustomerprofilesDomain#matching}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#region CustomerprofilesDomain#region}

---

##### `rule_based_matching`<sup>Optional</sup> <a name="rule_based_matching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.ruleBasedMatching"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a>

rule_based_matching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#rule_based_matching CustomerprofilesDomain#rule_based_matching}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#tags CustomerprofilesDomain#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#tags_all CustomerprofilesDomain#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putMatching">put_matching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putRuleBasedMatching">put_rule_based_matching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetDeadLetterQueueUrl">reset_dead_letter_queue_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetDefaultEncryptionKey">reset_default_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetMatching">reset_matching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetRuleBasedMatching">reset_rule_based_matching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_matching` <a name="put_matching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putMatching"></a>

```python
def put_matching(
  enabled: typing.Union[bool, IResolvable],
  auto_merging: CustomerprofilesDomainMatchingAutoMerging = None,
  exporting_config: CustomerprofilesDomainMatchingExportingConfig = None,
  job_schedule: CustomerprofilesDomainMatchingJobSchedule = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putMatching.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}.

---

###### `auto_merging`<sup>Optional</sup> <a name="auto_merging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putMatching.parameter.autoMerging"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a>

auto_merging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#auto_merging CustomerprofilesDomain#auto_merging}

---

###### `exporting_config`<sup>Optional</sup> <a name="exporting_config" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putMatching.parameter.exportingConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a>

exporting_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#exporting_config CustomerprofilesDomain#exporting_config}

---

###### `job_schedule`<sup>Optional</sup> <a name="job_schedule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putMatching.parameter.jobSchedule"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a>

job_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#job_schedule CustomerprofilesDomain#job_schedule}

---

##### `put_rule_based_matching` <a name="put_rule_based_matching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putRuleBasedMatching"></a>

```python
def put_rule_based_matching(
  enabled: typing.Union[bool, IResolvable],
  attribute_types_selector: CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector = None,
  conflict_resolution: CustomerprofilesDomainRuleBasedMatchingConflictResolution = None,
  exporting_config: CustomerprofilesDomainRuleBasedMatchingExportingConfig = None,
  matching_rules: typing.Union[IResolvable, typing.List[CustomerprofilesDomainRuleBasedMatchingMatchingRules]] = None,
  max_allowed_rule_level_for_matching: typing.Union[int, float] = None,
  max_allowed_rule_level_for_merging: typing.Union[int, float] = None,
  status: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putRuleBasedMatching.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}.

---

###### `attribute_types_selector`<sup>Optional</sup> <a name="attribute_types_selector" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putRuleBasedMatching.parameter.attributeTypesSelector"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a>

attribute_types_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#attribute_types_selector CustomerprofilesDomain#attribute_types_selector}

---

###### `conflict_resolution`<sup>Optional</sup> <a name="conflict_resolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putRuleBasedMatching.parameter.conflictResolution"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a>

conflict_resolution block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#conflict_resolution CustomerprofilesDomain#conflict_resolution}

---

###### `exporting_config`<sup>Optional</sup> <a name="exporting_config" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putRuleBasedMatching.parameter.exportingConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a>

exporting_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#exporting_config CustomerprofilesDomain#exporting_config}

---

###### `matching_rules`<sup>Optional</sup> <a name="matching_rules" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putRuleBasedMatching.parameter.matchingRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>]]

matching_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#matching_rules CustomerprofilesDomain#matching_rules}

---

###### `max_allowed_rule_level_for_matching`<sup>Optional</sup> <a name="max_allowed_rule_level_for_matching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putRuleBasedMatching.parameter.maxAllowedRuleLevelForMatching"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#max_allowed_rule_level_for_matching CustomerprofilesDomain#max_allowed_rule_level_for_matching}.

---

###### `max_allowed_rule_level_for_merging`<sup>Optional</sup> <a name="max_allowed_rule_level_for_merging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putRuleBasedMatching.parameter.maxAllowedRuleLevelForMerging"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#max_allowed_rule_level_for_merging CustomerprofilesDomain#max_allowed_rule_level_for_merging}.

---

###### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putRuleBasedMatching.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#status CustomerprofilesDomain#status}.

---

##### `reset_dead_letter_queue_url` <a name="reset_dead_letter_queue_url" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetDeadLetterQueueUrl"></a>

```python
def reset_dead_letter_queue_url() -> None
```

##### `reset_default_encryption_key` <a name="reset_default_encryption_key" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetDefaultEncryptionKey"></a>

```python
def reset_default_encryption_key() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_matching` <a name="reset_matching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetMatching"></a>

```python
def reset_matching() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_rule_based_matching` <a name="reset_rule_based_matching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetRuleBasedMatching"></a>

```python
def reset_rule_based_matching() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CustomerprofilesDomain resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomain.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CustomerprofilesDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CustomerprofilesDomain to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CustomerprofilesDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CustomerprofilesDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.matching">matching</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference">CustomerprofilesDomainMatchingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.ruleBasedMatching">rule_based_matching</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference">CustomerprofilesDomainRuleBasedMatchingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.deadLetterQueueUrlInput">dead_letter_queue_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultEncryptionKeyInput">default_encryption_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultExpirationDaysInput">default_expiration_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.matchingInput">matching_input</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.ruleBasedMatchingInput">rule_based_matching_input</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.deadLetterQueueUrl">dead_letter_queue_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultEncryptionKey">default_encryption_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultExpirationDays">default_expiration_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `matching`<sup>Required</sup> <a name="matching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.matching"></a>

```python
matching: CustomerprofilesDomainMatchingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference">CustomerprofilesDomainMatchingOutputReference</a>

---

##### `rule_based_matching`<sup>Required</sup> <a name="rule_based_matching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.ruleBasedMatching"></a>

```python
rule_based_matching: CustomerprofilesDomainRuleBasedMatchingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference">CustomerprofilesDomainRuleBasedMatchingOutputReference</a>

---

##### `dead_letter_queue_url_input`<sup>Optional</sup> <a name="dead_letter_queue_url_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.deadLetterQueueUrlInput"></a>

```python
dead_letter_queue_url_input: str
```

- *Type:* str

---

##### `default_encryption_key_input`<sup>Optional</sup> <a name="default_encryption_key_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultEncryptionKeyInput"></a>

```python
default_encryption_key_input: str
```

- *Type:* str

---

##### `default_expiration_days_input`<sup>Optional</sup> <a name="default_expiration_days_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultExpirationDaysInput"></a>

```python
default_expiration_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `matching_input`<sup>Optional</sup> <a name="matching_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.matchingInput"></a>

```python
matching_input: CustomerprofilesDomainMatching
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `rule_based_matching_input`<sup>Optional</sup> <a name="rule_based_matching_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.ruleBasedMatchingInput"></a>

```python
rule_based_matching_input: CustomerprofilesDomainRuleBasedMatching
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `dead_letter_queue_url`<sup>Required</sup> <a name="dead_letter_queue_url" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.deadLetterQueueUrl"></a>

```python
dead_letter_queue_url: str
```

- *Type:* str

---

##### `default_encryption_key`<sup>Required</sup> <a name="default_encryption_key" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultEncryptionKey"></a>

```python
default_encryption_key: str
```

- *Type:* str

---

##### `default_expiration_days`<sup>Required</sup> <a name="default_expiration_days" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultExpirationDays"></a>

```python
default_expiration_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesDomainConfig <a name="CustomerprofilesDomainConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_expiration_days: typing.Union[int, float],
  domain_name: str,
  dead_letter_queue_url: str = None,
  default_encryption_key: str = None,
  id: str = None,
  matching: CustomerprofilesDomainMatching = None,
  region: str = None,
  rule_based_matching: CustomerprofilesDomainRuleBasedMatching = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.defaultExpirationDays">default_expiration_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#default_expiration_days CustomerprofilesDomain#default_expiration_days}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#domain_name CustomerprofilesDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.deadLetterQueueUrl">dead_letter_queue_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#dead_letter_queue_url CustomerprofilesDomain#dead_letter_queue_url}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.defaultEncryptionKey">default_encryption_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#default_encryption_key CustomerprofilesDomain#default_encryption_key}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#id CustomerprofilesDomain#id}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.matching">matching</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a></code> | matching block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.ruleBasedMatching">rule_based_matching</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a></code> | rule_based_matching block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#tags CustomerprofilesDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#tags_all CustomerprofilesDomain#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_expiration_days`<sup>Required</sup> <a name="default_expiration_days" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.defaultExpirationDays"></a>

```python
default_expiration_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#default_expiration_days CustomerprofilesDomain#default_expiration_days}.

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#domain_name CustomerprofilesDomain#domain_name}.

---

##### `dead_letter_queue_url`<sup>Optional</sup> <a name="dead_letter_queue_url" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.deadLetterQueueUrl"></a>

```python
dead_letter_queue_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#dead_letter_queue_url CustomerprofilesDomain#dead_letter_queue_url}.

---

##### `default_encryption_key`<sup>Optional</sup> <a name="default_encryption_key" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.defaultEncryptionKey"></a>

```python
default_encryption_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#default_encryption_key CustomerprofilesDomain#default_encryption_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#id CustomerprofilesDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `matching`<sup>Optional</sup> <a name="matching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.matching"></a>

```python
matching: CustomerprofilesDomainMatching
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a>

matching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#matching CustomerprofilesDomain#matching}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#region CustomerprofilesDomain#region}

---

##### `rule_based_matching`<sup>Optional</sup> <a name="rule_based_matching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.ruleBasedMatching"></a>

```python
rule_based_matching: CustomerprofilesDomainRuleBasedMatching
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a>

rule_based_matching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#rule_based_matching CustomerprofilesDomain#rule_based_matching}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#tags CustomerprofilesDomain#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#tags_all CustomerprofilesDomain#tags_all}.

---

### CustomerprofilesDomainMatching <a name="CustomerprofilesDomainMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainMatching(
  enabled: typing.Union[bool, IResolvable],
  auto_merging: CustomerprofilesDomainMatchingAutoMerging = None,
  exporting_config: CustomerprofilesDomainMatchingExportingConfig = None,
  job_schedule: CustomerprofilesDomainMatchingJobSchedule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.autoMerging">auto_merging</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a></code> | auto_merging block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.exportingConfig">exporting_config</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a></code> | exporting_config block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.jobSchedule">job_schedule</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a></code> | job_schedule block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}.

---

##### `auto_merging`<sup>Optional</sup> <a name="auto_merging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.autoMerging"></a>

```python
auto_merging: CustomerprofilesDomainMatchingAutoMerging
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a>

auto_merging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#auto_merging CustomerprofilesDomain#auto_merging}

---

##### `exporting_config`<sup>Optional</sup> <a name="exporting_config" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.exportingConfig"></a>

```python
exporting_config: CustomerprofilesDomainMatchingExportingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a>

exporting_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#exporting_config CustomerprofilesDomain#exporting_config}

---

##### `job_schedule`<sup>Optional</sup> <a name="job_schedule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.jobSchedule"></a>

```python
job_schedule: CustomerprofilesDomainMatchingJobSchedule
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a>

job_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#job_schedule CustomerprofilesDomain#job_schedule}

---

### CustomerprofilesDomainMatchingAutoMerging <a name="CustomerprofilesDomainMatchingAutoMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging(
  enabled: typing.Union[bool, IResolvable],
  conflict_resolution: CustomerprofilesDomainMatchingAutoMergingConflictResolution = None,
  consolidation: CustomerprofilesDomainMatchingAutoMergingConsolidation = None,
  min_allowed_confidence_score_for_merging: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.conflictResolution">conflict_resolution</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a></code> | conflict_resolution block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.consolidation">consolidation</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a></code> | consolidation block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.minAllowedConfidenceScoreForMerging">min_allowed_confidence_score_for_merging</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#min_allowed_confidence_score_for_merging CustomerprofilesDomain#min_allowed_confidence_score_for_merging}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}.

---

##### `conflict_resolution`<sup>Optional</sup> <a name="conflict_resolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.conflictResolution"></a>

```python
conflict_resolution: CustomerprofilesDomainMatchingAutoMergingConflictResolution
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a>

conflict_resolution block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#conflict_resolution CustomerprofilesDomain#conflict_resolution}

---

##### `consolidation`<sup>Optional</sup> <a name="consolidation" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.consolidation"></a>

```python
consolidation: CustomerprofilesDomainMatchingAutoMergingConsolidation
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a>

consolidation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#consolidation CustomerprofilesDomain#consolidation}

---

##### `min_allowed_confidence_score_for_merging`<sup>Optional</sup> <a name="min_allowed_confidence_score_for_merging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.minAllowedConfidenceScoreForMerging"></a>

```python
min_allowed_confidence_score_for_merging: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#min_allowed_confidence_score_for_merging CustomerprofilesDomain#min_allowed_confidence_score_for_merging}.

---

### CustomerprofilesDomainMatchingAutoMergingConflictResolution <a name="CustomerprofilesDomainMatchingAutoMergingConflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution(
  conflict_resolving_model: str,
  source_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution.property.conflictResolvingModel">conflict_resolving_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#conflict_resolving_model CustomerprofilesDomain#conflict_resolving_model}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution.property.sourceName">source_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#source_name CustomerprofilesDomain#source_name}. |

---

##### `conflict_resolving_model`<sup>Required</sup> <a name="conflict_resolving_model" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution.property.conflictResolvingModel"></a>

```python
conflict_resolving_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#conflict_resolving_model CustomerprofilesDomain#conflict_resolving_model}.

---

##### `source_name`<sup>Optional</sup> <a name="source_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#source_name CustomerprofilesDomain#source_name}.

---

### CustomerprofilesDomainMatchingAutoMergingConsolidation <a name="CustomerprofilesDomainMatchingAutoMergingConsolidation" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation(
  matching_attributes_list: typing.Union[IResolvable, typing.List[typing.List[str]]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation.property.matchingAttributesList">matching_attributes_list</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.List[str]]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#matching_attributes_list CustomerprofilesDomain#matching_attributes_list}. |

---

##### `matching_attributes_list`<sup>Required</sup> <a name="matching_attributes_list" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation.property.matchingAttributesList"></a>

```python
matching_attributes_list: typing.Union[IResolvable, typing.List[typing.List[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.List[str]]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#matching_attributes_list CustomerprofilesDomain#matching_attributes_list}.

---

### CustomerprofilesDomainMatchingExportingConfig <a name="CustomerprofilesDomainMatchingExportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig(
  s3_exporting: CustomerprofilesDomainMatchingExportingConfigS3Exporting = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig.property.s3Exporting">s3_exporting</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a></code> | s3_exporting block. |

---

##### `s3_exporting`<sup>Optional</sup> <a name="s3_exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig.property.s3Exporting"></a>

```python
s3_exporting: CustomerprofilesDomainMatchingExportingConfigS3Exporting
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a>

s3_exporting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#s3_exporting CustomerprofilesDomain#s3_exporting}

---

### CustomerprofilesDomainMatchingExportingConfigS3Exporting <a name="CustomerprofilesDomainMatchingExportingConfigS3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting(
  s3_bucket_name: str,
  s3_key_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#s3_bucket_name CustomerprofilesDomain#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting.property.s3KeyName">s3_key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#s3_key_name CustomerprofilesDomain#s3_key_name}. |

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#s3_bucket_name CustomerprofilesDomain#s3_bucket_name}.

---

##### `s3_key_name`<sup>Optional</sup> <a name="s3_key_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting.property.s3KeyName"></a>

```python
s3_key_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#s3_key_name CustomerprofilesDomain#s3_key_name}.

---

### CustomerprofilesDomainMatchingJobSchedule <a name="CustomerprofilesDomainMatchingJobSchedule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule(
  day_of_the_week: str,
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule.property.dayOfTheWeek">day_of_the_week</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#day_of_the_week CustomerprofilesDomain#day_of_the_week}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule.property.time">time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#time CustomerprofilesDomain#time}. |

---

##### `day_of_the_week`<sup>Required</sup> <a name="day_of_the_week" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule.property.dayOfTheWeek"></a>

```python
day_of_the_week: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#day_of_the_week CustomerprofilesDomain#day_of_the_week}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule.property.time"></a>

```python
time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#time CustomerprofilesDomain#time}.

---

### CustomerprofilesDomainRuleBasedMatching <a name="CustomerprofilesDomainRuleBasedMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching(
  enabled: typing.Union[bool, IResolvable],
  attribute_types_selector: CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector = None,
  conflict_resolution: CustomerprofilesDomainRuleBasedMatchingConflictResolution = None,
  exporting_config: CustomerprofilesDomainRuleBasedMatchingExportingConfig = None,
  matching_rules: typing.Union[IResolvable, typing.List[CustomerprofilesDomainRuleBasedMatchingMatchingRules]] = None,
  max_allowed_rule_level_for_matching: typing.Union[int, float] = None,
  max_allowed_rule_level_for_merging: typing.Union[int, float] = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.attributeTypesSelector">attribute_types_selector</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a></code> | attribute_types_selector block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.conflictResolution">conflict_resolution</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a></code> | conflict_resolution block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.exportingConfig">exporting_config</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a></code> | exporting_config block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.matchingRules">matching_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>]]</code> | matching_rules block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.maxAllowedRuleLevelForMatching">max_allowed_rule_level_for_matching</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#max_allowed_rule_level_for_matching CustomerprofilesDomain#max_allowed_rule_level_for_matching}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.maxAllowedRuleLevelForMerging">max_allowed_rule_level_for_merging</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#max_allowed_rule_level_for_merging CustomerprofilesDomain#max_allowed_rule_level_for_merging}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#status CustomerprofilesDomain#status}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}.

---

##### `attribute_types_selector`<sup>Optional</sup> <a name="attribute_types_selector" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.attributeTypesSelector"></a>

```python
attribute_types_selector: CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a>

attribute_types_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#attribute_types_selector CustomerprofilesDomain#attribute_types_selector}

---

##### `conflict_resolution`<sup>Optional</sup> <a name="conflict_resolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.conflictResolution"></a>

```python
conflict_resolution: CustomerprofilesDomainRuleBasedMatchingConflictResolution
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a>

conflict_resolution block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#conflict_resolution CustomerprofilesDomain#conflict_resolution}

---

##### `exporting_config`<sup>Optional</sup> <a name="exporting_config" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.exportingConfig"></a>

```python
exporting_config: CustomerprofilesDomainRuleBasedMatchingExportingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a>

exporting_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#exporting_config CustomerprofilesDomain#exporting_config}

---

##### `matching_rules`<sup>Optional</sup> <a name="matching_rules" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.matchingRules"></a>

```python
matching_rules: typing.Union[IResolvable, typing.List[CustomerprofilesDomainRuleBasedMatchingMatchingRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>]]

matching_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#matching_rules CustomerprofilesDomain#matching_rules}

---

##### `max_allowed_rule_level_for_matching`<sup>Optional</sup> <a name="max_allowed_rule_level_for_matching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.maxAllowedRuleLevelForMatching"></a>

```python
max_allowed_rule_level_for_matching: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#max_allowed_rule_level_for_matching CustomerprofilesDomain#max_allowed_rule_level_for_matching}.

---

##### `max_allowed_rule_level_for_merging`<sup>Optional</sup> <a name="max_allowed_rule_level_for_merging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.maxAllowedRuleLevelForMerging"></a>

```python
max_allowed_rule_level_for_merging: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#max_allowed_rule_level_for_merging CustomerprofilesDomain#max_allowed_rule_level_for_merging}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#status CustomerprofilesDomain#status}.

---

### CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector <a name="CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector(
  attribute_matching_model: str,
  address: typing.List[str] = None,
  email_address: typing.List[str] = None,
  phone_number: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.attributeMatchingModel">attribute_matching_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#attribute_matching_model CustomerprofilesDomain#attribute_matching_model}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.address">address</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#address CustomerprofilesDomain#address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.emailAddress">email_address</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#email_address CustomerprofilesDomain#email_address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.phoneNumber">phone_number</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#phone_number CustomerprofilesDomain#phone_number}. |

---

##### `attribute_matching_model`<sup>Required</sup> <a name="attribute_matching_model" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.attributeMatchingModel"></a>

```python
attribute_matching_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#attribute_matching_model CustomerprofilesDomain#attribute_matching_model}.

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.address"></a>

```python
address: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#address CustomerprofilesDomain#address}.

---

##### `email_address`<sup>Optional</sup> <a name="email_address" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.emailAddress"></a>

```python
email_address: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#email_address CustomerprofilesDomain#email_address}.

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.phoneNumber"></a>

```python
phone_number: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#phone_number CustomerprofilesDomain#phone_number}.

---

### CustomerprofilesDomainRuleBasedMatchingConflictResolution <a name="CustomerprofilesDomainRuleBasedMatchingConflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution(
  conflict_resolving_model: str,
  source_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution.property.conflictResolvingModel">conflict_resolving_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#conflict_resolving_model CustomerprofilesDomain#conflict_resolving_model}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution.property.sourceName">source_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#source_name CustomerprofilesDomain#source_name}. |

---

##### `conflict_resolving_model`<sup>Required</sup> <a name="conflict_resolving_model" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution.property.conflictResolvingModel"></a>

```python
conflict_resolving_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#conflict_resolving_model CustomerprofilesDomain#conflict_resolving_model}.

---

##### `source_name`<sup>Optional</sup> <a name="source_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#source_name CustomerprofilesDomain#source_name}.

---

### CustomerprofilesDomainRuleBasedMatchingExportingConfig <a name="CustomerprofilesDomainRuleBasedMatchingExportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig(
  s3_exporting: CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig.property.s3Exporting">s3_exporting</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a></code> | s3_exporting block. |

---

##### `s3_exporting`<sup>Optional</sup> <a name="s3_exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig.property.s3Exporting"></a>

```python
s3_exporting: CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a>

s3_exporting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#s3_exporting CustomerprofilesDomain#s3_exporting}

---

### CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting <a name="CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting(
  s3_bucket_name: str,
  s3_key_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#s3_bucket_name CustomerprofilesDomain#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting.property.s3KeyName">s3_key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#s3_key_name CustomerprofilesDomain#s3_key_name}. |

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#s3_bucket_name CustomerprofilesDomain#s3_bucket_name}.

---

##### `s3_key_name`<sup>Optional</sup> <a name="s3_key_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting.property.s3KeyName"></a>

```python
s3_key_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#s3_key_name CustomerprofilesDomain#s3_key_name}.

---

### CustomerprofilesDomainRuleBasedMatchingMatchingRules <a name="CustomerprofilesDomainRuleBasedMatchingMatchingRules" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules(
  rule: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules.property.rule">rule</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#rule CustomerprofilesDomain#rule}. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules.property.rule"></a>

```python
rule: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#rule CustomerprofilesDomain#rule}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference <a name="CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.resetSourceName">reset_source_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_name` <a name="reset_source_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.resetSourceName"></a>

```python
def reset_source_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.conflictResolvingModelInput">conflict_resolving_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.sourceNameInput">source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.conflictResolvingModel">conflict_resolving_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.sourceName">source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conflict_resolving_model_input`<sup>Optional</sup> <a name="conflict_resolving_model_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.conflictResolvingModelInput"></a>

```python
conflict_resolving_model_input: str
```

- *Type:* str

---

##### `source_name_input`<sup>Optional</sup> <a name="source_name_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.sourceNameInput"></a>

```python
source_name_input: str
```

- *Type:* str

---

##### `conflict_resolving_model`<sup>Required</sup> <a name="conflict_resolving_model" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.conflictResolvingModel"></a>

```python
conflict_resolving_model: str
```

- *Type:* str

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.internalValue"></a>

```python
internal_value: CustomerprofilesDomainMatchingAutoMergingConflictResolution
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a>

---


### CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference <a name="CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.matchingAttributesListInput">matching_attributes_list_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.List[str]]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.matchingAttributesList">matching_attributes_list</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.List[str]]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `matching_attributes_list_input`<sup>Optional</sup> <a name="matching_attributes_list_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.matchingAttributesListInput"></a>

```python
matching_attributes_list_input: typing.Union[IResolvable, typing.List[typing.List[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.List[str]]]

---

##### `matching_attributes_list`<sup>Required</sup> <a name="matching_attributes_list" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.matchingAttributesList"></a>

```python
matching_attributes_list: typing.Union[IResolvable, typing.List[typing.List[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.List[str]]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.internalValue"></a>

```python
internal_value: CustomerprofilesDomainMatchingAutoMergingConsolidation
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a>

---


### CustomerprofilesDomainMatchingAutoMergingOutputReference <a name="CustomerprofilesDomainMatchingAutoMergingOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.putConflictResolution">put_conflict_resolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.putConsolidation">put_consolidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resetConflictResolution">reset_conflict_resolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resetConsolidation">reset_consolidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resetMinAllowedConfidenceScoreForMerging">reset_min_allowed_confidence_score_for_merging</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conflict_resolution` <a name="put_conflict_resolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.putConflictResolution"></a>

```python
def put_conflict_resolution(
  conflict_resolving_model: str,
  source_name: str = None
) -> None
```

###### `conflict_resolving_model`<sup>Required</sup> <a name="conflict_resolving_model" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.putConflictResolution.parameter.conflictResolvingModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#conflict_resolving_model CustomerprofilesDomain#conflict_resolving_model}.

---

###### `source_name`<sup>Optional</sup> <a name="source_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.putConflictResolution.parameter.sourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#source_name CustomerprofilesDomain#source_name}.

---

##### `put_consolidation` <a name="put_consolidation" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.putConsolidation"></a>

```python
def put_consolidation(
  matching_attributes_list: typing.Union[IResolvable, typing.List[typing.List[str]]]
) -> None
```

###### `matching_attributes_list`<sup>Required</sup> <a name="matching_attributes_list" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.putConsolidation.parameter.matchingAttributesList"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.List[str]]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#matching_attributes_list CustomerprofilesDomain#matching_attributes_list}.

---

##### `reset_conflict_resolution` <a name="reset_conflict_resolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resetConflictResolution"></a>

```python
def reset_conflict_resolution() -> None
```

##### `reset_consolidation` <a name="reset_consolidation" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resetConsolidation"></a>

```python
def reset_consolidation() -> None
```

##### `reset_min_allowed_confidence_score_for_merging` <a name="reset_min_allowed_confidence_score_for_merging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resetMinAllowedConfidenceScoreForMerging"></a>

```python
def reset_min_allowed_confidence_score_for_merging() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.conflictResolution">conflict_resolution</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference">CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.consolidation">consolidation</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference">CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.conflictResolutionInput">conflict_resolution_input</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.consolidationInput">consolidation_input</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.minAllowedConfidenceScoreForMergingInput">min_allowed_confidence_score_for_merging_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.minAllowedConfidenceScoreForMerging">min_allowed_confidence_score_for_merging</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conflict_resolution`<sup>Required</sup> <a name="conflict_resolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.conflictResolution"></a>

```python
conflict_resolution: CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference">CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference</a>

---

##### `consolidation`<sup>Required</sup> <a name="consolidation" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.consolidation"></a>

```python
consolidation: CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference">CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference</a>

---

##### `conflict_resolution_input`<sup>Optional</sup> <a name="conflict_resolution_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.conflictResolutionInput"></a>

```python
conflict_resolution_input: CustomerprofilesDomainMatchingAutoMergingConflictResolution
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a>

---

##### `consolidation_input`<sup>Optional</sup> <a name="consolidation_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.consolidationInput"></a>

```python
consolidation_input: CustomerprofilesDomainMatchingAutoMergingConsolidation
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `min_allowed_confidence_score_for_merging_input`<sup>Optional</sup> <a name="min_allowed_confidence_score_for_merging_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.minAllowedConfidenceScoreForMergingInput"></a>

```python
min_allowed_confidence_score_for_merging_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `min_allowed_confidence_score_for_merging`<sup>Required</sup> <a name="min_allowed_confidence_score_for_merging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.minAllowedConfidenceScoreForMerging"></a>

```python
min_allowed_confidence_score_for_merging: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.internalValue"></a>

```python
internal_value: CustomerprofilesDomainMatchingAutoMerging
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a>

---


### CustomerprofilesDomainMatchingExportingConfigOutputReference <a name="CustomerprofilesDomainMatchingExportingConfigOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.putS3Exporting">put_s3_exporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.resetS3Exporting">reset_s3_exporting</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_exporting` <a name="put_s3_exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.putS3Exporting"></a>

```python
def put_s3_exporting(
  s3_bucket_name: str,
  s3_key_name: str = None
) -> None
```

###### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.putS3Exporting.parameter.s3BucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#s3_bucket_name CustomerprofilesDomain#s3_bucket_name}.

---

###### `s3_key_name`<sup>Optional</sup> <a name="s3_key_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.putS3Exporting.parameter.s3KeyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#s3_key_name CustomerprofilesDomain#s3_key_name}.

---

##### `reset_s3_exporting` <a name="reset_s3_exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.resetS3Exporting"></a>

```python
def reset_s3_exporting() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.s3Exporting">s3_exporting</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference">CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.s3ExportingInput">s3_exporting_input</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_exporting`<sup>Required</sup> <a name="s3_exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.s3Exporting"></a>

```python
s3_exporting: CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference">CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference</a>

---

##### `s3_exporting_input`<sup>Optional</sup> <a name="s3_exporting_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.s3ExportingInput"></a>

```python
s3_exporting_input: CustomerprofilesDomainMatchingExportingConfigS3Exporting
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.internalValue"></a>

```python
internal_value: CustomerprofilesDomainMatchingExportingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a>

---


### CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference <a name="CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.resetS3KeyName">reset_s3_key_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_key_name` <a name="reset_s3_key_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.resetS3KeyName"></a>

```python
def reset_s3_key_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3BucketNameInput">s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3KeyNameInput">s3_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3KeyName">s3_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket_name_input`<sup>Optional</sup> <a name="s3_bucket_name_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3BucketNameInput"></a>

```python
s3_bucket_name_input: str
```

- *Type:* str

---

##### `s3_key_name_input`<sup>Optional</sup> <a name="s3_key_name_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3KeyNameInput"></a>

```python
s3_key_name_input: str
```

- *Type:* str

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `s3_key_name`<sup>Required</sup> <a name="s3_key_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3KeyName"></a>

```python
s3_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.internalValue"></a>

```python
internal_value: CustomerprofilesDomainMatchingExportingConfigS3Exporting
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a>

---


### CustomerprofilesDomainMatchingJobScheduleOutputReference <a name="CustomerprofilesDomainMatchingJobScheduleOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.dayOfTheWeekInput">day_of_the_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.dayOfTheWeek">day_of_the_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_the_week_input`<sup>Optional</sup> <a name="day_of_the_week_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.dayOfTheWeekInput"></a>

```python
day_of_the_week_input: str
```

- *Type:* str

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `day_of_the_week`<sup>Required</sup> <a name="day_of_the_week" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.dayOfTheWeek"></a>

```python
day_of_the_week: str
```

- *Type:* str

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.internalValue"></a>

```python
internal_value: CustomerprofilesDomainMatchingJobSchedule
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a>

---


### CustomerprofilesDomainMatchingOutputReference <a name="CustomerprofilesDomainMatchingOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putAutoMerging">put_auto_merging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putExportingConfig">put_exporting_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putJobSchedule">put_job_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resetAutoMerging">reset_auto_merging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resetExportingConfig">reset_exporting_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resetJobSchedule">reset_job_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auto_merging` <a name="put_auto_merging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putAutoMerging"></a>

```python
def put_auto_merging(
  enabled: typing.Union[bool, IResolvable],
  conflict_resolution: CustomerprofilesDomainMatchingAutoMergingConflictResolution = None,
  consolidation: CustomerprofilesDomainMatchingAutoMergingConsolidation = None,
  min_allowed_confidence_score_for_merging: typing.Union[int, float] = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putAutoMerging.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}.

---

###### `conflict_resolution`<sup>Optional</sup> <a name="conflict_resolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putAutoMerging.parameter.conflictResolution"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a>

conflict_resolution block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#conflict_resolution CustomerprofilesDomain#conflict_resolution}

---

###### `consolidation`<sup>Optional</sup> <a name="consolidation" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putAutoMerging.parameter.consolidation"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a>

consolidation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#consolidation CustomerprofilesDomain#consolidation}

---

###### `min_allowed_confidence_score_for_merging`<sup>Optional</sup> <a name="min_allowed_confidence_score_for_merging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putAutoMerging.parameter.minAllowedConfidenceScoreForMerging"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#min_allowed_confidence_score_for_merging CustomerprofilesDomain#min_allowed_confidence_score_for_merging}.

---

##### `put_exporting_config` <a name="put_exporting_config" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putExportingConfig"></a>

```python
def put_exporting_config(
  s3_exporting: CustomerprofilesDomainMatchingExportingConfigS3Exporting = None
) -> None
```

###### `s3_exporting`<sup>Optional</sup> <a name="s3_exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putExportingConfig.parameter.s3Exporting"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a>

s3_exporting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#s3_exporting CustomerprofilesDomain#s3_exporting}

---

##### `put_job_schedule` <a name="put_job_schedule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putJobSchedule"></a>

```python
def put_job_schedule(
  day_of_the_week: str,
  time: str
) -> None
```

###### `day_of_the_week`<sup>Required</sup> <a name="day_of_the_week" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putJobSchedule.parameter.dayOfTheWeek"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#day_of_the_week CustomerprofilesDomain#day_of_the_week}.

---

###### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putJobSchedule.parameter.time"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#time CustomerprofilesDomain#time}.

---

##### `reset_auto_merging` <a name="reset_auto_merging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resetAutoMerging"></a>

```python
def reset_auto_merging() -> None
```

##### `reset_exporting_config` <a name="reset_exporting_config" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resetExportingConfig"></a>

```python
def reset_exporting_config() -> None
```

##### `reset_job_schedule` <a name="reset_job_schedule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resetJobSchedule"></a>

```python
def reset_job_schedule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.autoMerging">auto_merging</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference">CustomerprofilesDomainMatchingAutoMergingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.exportingConfig">exporting_config</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference">CustomerprofilesDomainMatchingExportingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.jobSchedule">job_schedule</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference">CustomerprofilesDomainMatchingJobScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.autoMergingInput">auto_merging_input</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.exportingConfigInput">exporting_config_input</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.jobScheduleInput">job_schedule_input</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_merging`<sup>Required</sup> <a name="auto_merging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.autoMerging"></a>

```python
auto_merging: CustomerprofilesDomainMatchingAutoMergingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference">CustomerprofilesDomainMatchingAutoMergingOutputReference</a>

---

##### `exporting_config`<sup>Required</sup> <a name="exporting_config" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.exportingConfig"></a>

```python
exporting_config: CustomerprofilesDomainMatchingExportingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference">CustomerprofilesDomainMatchingExportingConfigOutputReference</a>

---

##### `job_schedule`<sup>Required</sup> <a name="job_schedule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.jobSchedule"></a>

```python
job_schedule: CustomerprofilesDomainMatchingJobScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference">CustomerprofilesDomainMatchingJobScheduleOutputReference</a>

---

##### `auto_merging_input`<sup>Optional</sup> <a name="auto_merging_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.autoMergingInput"></a>

```python
auto_merging_input: CustomerprofilesDomainMatchingAutoMerging
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exporting_config_input`<sup>Optional</sup> <a name="exporting_config_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.exportingConfigInput"></a>

```python
exporting_config_input: CustomerprofilesDomainMatchingExportingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a>

---

##### `job_schedule_input`<sup>Optional</sup> <a name="job_schedule_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.jobScheduleInput"></a>

```python
job_schedule_input: CustomerprofilesDomainMatchingJobSchedule
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.internalValue"></a>

```python
internal_value: CustomerprofilesDomainMatching
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a>

---


### CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference <a name="CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resetEmailAddress">reset_email_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resetPhoneNumber">reset_phone_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address` <a name="reset_address" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_email_address` <a name="reset_email_address" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resetEmailAddress"></a>

```python
def reset_email_address() -> None
```

##### `reset_phone_number` <a name="reset_phone_number" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resetPhoneNumber"></a>

```python
def reset_phone_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.addressInput">address_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.attributeMatchingModelInput">attribute_matching_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.emailAddressInput">email_address_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.phoneNumberInput">phone_number_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.address">address</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.attributeMatchingModel">attribute_matching_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.emailAddress">email_address</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.phoneNumber">phone_number</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.addressInput"></a>

```python
address_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attribute_matching_model_input`<sup>Optional</sup> <a name="attribute_matching_model_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.attributeMatchingModelInput"></a>

```python
attribute_matching_model_input: str
```

- *Type:* str

---

##### `email_address_input`<sup>Optional</sup> <a name="email_address_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.emailAddressInput"></a>

```python
email_address_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.phoneNumberInput"></a>

```python
phone_number_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.address"></a>

```python
address: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attribute_matching_model`<sup>Required</sup> <a name="attribute_matching_model" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.attributeMatchingModel"></a>

```python
attribute_matching_model: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.emailAddress"></a>

```python
email_address: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.phoneNumber"></a>

```python
phone_number: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.internalValue"></a>

```python
internal_value: CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a>

---


### CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference <a name="CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.resetSourceName">reset_source_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_name` <a name="reset_source_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.resetSourceName"></a>

```python
def reset_source_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.conflictResolvingModelInput">conflict_resolving_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.sourceNameInput">source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.conflictResolvingModel">conflict_resolving_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.sourceName">source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conflict_resolving_model_input`<sup>Optional</sup> <a name="conflict_resolving_model_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.conflictResolvingModelInput"></a>

```python
conflict_resolving_model_input: str
```

- *Type:* str

---

##### `source_name_input`<sup>Optional</sup> <a name="source_name_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.sourceNameInput"></a>

```python
source_name_input: str
```

- *Type:* str

---

##### `conflict_resolving_model`<sup>Required</sup> <a name="conflict_resolving_model" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.conflictResolvingModel"></a>

```python
conflict_resolving_model: str
```

- *Type:* str

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.internalValue"></a>

```python
internal_value: CustomerprofilesDomainRuleBasedMatchingConflictResolution
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a>

---


### CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference <a name="CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.putS3Exporting">put_s3_exporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.resetS3Exporting">reset_s3_exporting</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_exporting` <a name="put_s3_exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.putS3Exporting"></a>

```python
def put_s3_exporting(
  s3_bucket_name: str,
  s3_key_name: str = None
) -> None
```

###### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.putS3Exporting.parameter.s3BucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#s3_bucket_name CustomerprofilesDomain#s3_bucket_name}.

---

###### `s3_key_name`<sup>Optional</sup> <a name="s3_key_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.putS3Exporting.parameter.s3KeyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#s3_key_name CustomerprofilesDomain#s3_key_name}.

---

##### `reset_s3_exporting` <a name="reset_s3_exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.resetS3Exporting"></a>

```python
def reset_s3_exporting() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.s3Exporting">s3_exporting</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.s3ExportingInput">s3_exporting_input</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_exporting`<sup>Required</sup> <a name="s3_exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.s3Exporting"></a>

```python
s3_exporting: CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference</a>

---

##### `s3_exporting_input`<sup>Optional</sup> <a name="s3_exporting_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.s3ExportingInput"></a>

```python
s3_exporting_input: CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.internalValue"></a>

```python
internal_value: CustomerprofilesDomainRuleBasedMatchingExportingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a>

---


### CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference <a name="CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.resetS3KeyName">reset_s3_key_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_key_name` <a name="reset_s3_key_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.resetS3KeyName"></a>

```python
def reset_s3_key_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3BucketNameInput">s3_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3KeyNameInput">s3_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3KeyName">s3_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket_name_input`<sup>Optional</sup> <a name="s3_bucket_name_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3BucketNameInput"></a>

```python
s3_bucket_name_input: str
```

- *Type:* str

---

##### `s3_key_name_input`<sup>Optional</sup> <a name="s3_key_name_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3KeyNameInput"></a>

```python
s3_key_name_input: str
```

- *Type:* str

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `s3_key_name`<sup>Required</sup> <a name="s3_key_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3KeyName"></a>

```python
s3_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.internalValue"></a>

```python
internal_value: CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a>

---


### CustomerprofilesDomainRuleBasedMatchingMatchingRulesList <a name="CustomerprofilesDomainRuleBasedMatchingMatchingRulesList" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CustomerprofilesDomainRuleBasedMatchingMatchingRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>]]

---


### CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference <a name="CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.ruleInput">rule_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.rule">rule</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.ruleInput"></a>

```python
rule_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.rule"></a>

```python
rule: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CustomerprofilesDomainRuleBasedMatchingMatchingRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>]

---


### CustomerprofilesDomainRuleBasedMatchingOutputReference <a name="CustomerprofilesDomainRuleBasedMatchingOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_domain

customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putAttributeTypesSelector">put_attribute_types_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putConflictResolution">put_conflict_resolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putExportingConfig">put_exporting_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putMatchingRules">put_matching_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetAttributeTypesSelector">reset_attribute_types_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetConflictResolution">reset_conflict_resolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetExportingConfig">reset_exporting_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetMatchingRules">reset_matching_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetMaxAllowedRuleLevelForMatching">reset_max_allowed_rule_level_for_matching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetMaxAllowedRuleLevelForMerging">reset_max_allowed_rule_level_for_merging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_attribute_types_selector` <a name="put_attribute_types_selector" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putAttributeTypesSelector"></a>

```python
def put_attribute_types_selector(
  attribute_matching_model: str,
  address: typing.List[str] = None,
  email_address: typing.List[str] = None,
  phone_number: typing.List[str] = None
) -> None
```

###### `attribute_matching_model`<sup>Required</sup> <a name="attribute_matching_model" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putAttributeTypesSelector.parameter.attributeMatchingModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#attribute_matching_model CustomerprofilesDomain#attribute_matching_model}.

---

###### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putAttributeTypesSelector.parameter.address"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#address CustomerprofilesDomain#address}.

---

###### `email_address`<sup>Optional</sup> <a name="email_address" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putAttributeTypesSelector.parameter.emailAddress"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#email_address CustomerprofilesDomain#email_address}.

---

###### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putAttributeTypesSelector.parameter.phoneNumber"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#phone_number CustomerprofilesDomain#phone_number}.

---

##### `put_conflict_resolution` <a name="put_conflict_resolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putConflictResolution"></a>

```python
def put_conflict_resolution(
  conflict_resolving_model: str,
  source_name: str = None
) -> None
```

###### `conflict_resolving_model`<sup>Required</sup> <a name="conflict_resolving_model" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putConflictResolution.parameter.conflictResolvingModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#conflict_resolving_model CustomerprofilesDomain#conflict_resolving_model}.

---

###### `source_name`<sup>Optional</sup> <a name="source_name" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putConflictResolution.parameter.sourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#source_name CustomerprofilesDomain#source_name}.

---

##### `put_exporting_config` <a name="put_exporting_config" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putExportingConfig"></a>

```python
def put_exporting_config(
  s3_exporting: CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting = None
) -> None
```

###### `s3_exporting`<sup>Optional</sup> <a name="s3_exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putExportingConfig.parameter.s3Exporting"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a>

s3_exporting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/customerprofiles_domain#s3_exporting CustomerprofilesDomain#s3_exporting}

---

##### `put_matching_rules` <a name="put_matching_rules" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putMatchingRules"></a>

```python
def put_matching_rules(
  value: typing.Union[IResolvable, typing.List[CustomerprofilesDomainRuleBasedMatchingMatchingRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putMatchingRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>]]

---

##### `reset_attribute_types_selector` <a name="reset_attribute_types_selector" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetAttributeTypesSelector"></a>

```python
def reset_attribute_types_selector() -> None
```

##### `reset_conflict_resolution` <a name="reset_conflict_resolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetConflictResolution"></a>

```python
def reset_conflict_resolution() -> None
```

##### `reset_exporting_config` <a name="reset_exporting_config" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetExportingConfig"></a>

```python
def reset_exporting_config() -> None
```

##### `reset_matching_rules` <a name="reset_matching_rules" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetMatchingRules"></a>

```python
def reset_matching_rules() -> None
```

##### `reset_max_allowed_rule_level_for_matching` <a name="reset_max_allowed_rule_level_for_matching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetMaxAllowedRuleLevelForMatching"></a>

```python
def reset_max_allowed_rule_level_for_matching() -> None
```

##### `reset_max_allowed_rule_level_for_merging` <a name="reset_max_allowed_rule_level_for_merging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetMaxAllowedRuleLevelForMerging"></a>

```python
def reset_max_allowed_rule_level_for_merging() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.attributeTypesSelector">attribute_types_selector</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.conflictResolution">conflict_resolution</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference">CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.exportingConfig">exporting_config</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference">CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.matchingRules">matching_rules</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList">CustomerprofilesDomainRuleBasedMatchingMatchingRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.attributeTypesSelectorInput">attribute_types_selector_input</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.conflictResolutionInput">conflict_resolution_input</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.exportingConfigInput">exporting_config_input</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.matchingRulesInput">matching_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMatchingInput">max_allowed_rule_level_for_matching_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMergingInput">max_allowed_rule_level_for_merging_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMatching">max_allowed_rule_level_for_matching</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMerging">max_allowed_rule_level_for_merging</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_types_selector`<sup>Required</sup> <a name="attribute_types_selector" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.attributeTypesSelector"></a>

```python
attribute_types_selector: CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference</a>

---

##### `conflict_resolution`<sup>Required</sup> <a name="conflict_resolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.conflictResolution"></a>

```python
conflict_resolution: CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference">CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference</a>

---

##### `exporting_config`<sup>Required</sup> <a name="exporting_config" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.exportingConfig"></a>

```python
exporting_config: CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference">CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference</a>

---

##### `matching_rules`<sup>Required</sup> <a name="matching_rules" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.matchingRules"></a>

```python
matching_rules: CustomerprofilesDomainRuleBasedMatchingMatchingRulesList
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList">CustomerprofilesDomainRuleBasedMatchingMatchingRulesList</a>

---

##### `attribute_types_selector_input`<sup>Optional</sup> <a name="attribute_types_selector_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.attributeTypesSelectorInput"></a>

```python
attribute_types_selector_input: CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a>

---

##### `conflict_resolution_input`<sup>Optional</sup> <a name="conflict_resolution_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.conflictResolutionInput"></a>

```python
conflict_resolution_input: CustomerprofilesDomainRuleBasedMatchingConflictResolution
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exporting_config_input`<sup>Optional</sup> <a name="exporting_config_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.exportingConfigInput"></a>

```python
exporting_config_input: CustomerprofilesDomainRuleBasedMatchingExportingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a>

---

##### `matching_rules_input`<sup>Optional</sup> <a name="matching_rules_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.matchingRulesInput"></a>

```python
matching_rules_input: typing.Union[IResolvable, typing.List[CustomerprofilesDomainRuleBasedMatchingMatchingRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>]]

---

##### `max_allowed_rule_level_for_matching_input`<sup>Optional</sup> <a name="max_allowed_rule_level_for_matching_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMatchingInput"></a>

```python
max_allowed_rule_level_for_matching_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_allowed_rule_level_for_merging_input`<sup>Optional</sup> <a name="max_allowed_rule_level_for_merging_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMergingInput"></a>

```python
max_allowed_rule_level_for_merging_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_allowed_rule_level_for_matching`<sup>Required</sup> <a name="max_allowed_rule_level_for_matching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMatching"></a>

```python
max_allowed_rule_level_for_matching: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_allowed_rule_level_for_merging`<sup>Required</sup> <a name="max_allowed_rule_level_for_merging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMerging"></a>

```python
max_allowed_rule_level_for_merging: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.internalValue"></a>

```python
internal_value: CustomerprofilesDomainRuleBasedMatching
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a>

---



