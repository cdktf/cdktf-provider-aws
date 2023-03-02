# `sesv2EmailIdentity` Submodule <a name="`sesv2EmailIdentity` Submodule" id="@cdktf/provider-aws.sesv2EmailIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2EmailIdentity <a name="Sesv2EmailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity aws_sesv2_email_identity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_email_identity

sesv2EmailIdentity.Sesv2EmailIdentity(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email_identity: str,
  configuration_set_name: str = None,
  dkim_signing_attributes: Sesv2EmailIdentityDkimSigningAttributes = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.emailIdentity">email_identity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#email_identity Sesv2EmailIdentity#email_identity}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.configurationSetName">configuration_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#configuration_set_name Sesv2EmailIdentity#configuration_set_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.dkimSigningAttributes">dkim_signing_attributes</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a></code> | dkim_signing_attributes block. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#id Sesv2EmailIdentity#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags Sesv2EmailIdentity#tags}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags_all Sesv2EmailIdentity#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email_identity`<sup>Required</sup> <a name="email_identity" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.emailIdentity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#email_identity Sesv2EmailIdentity#email_identity}.

---

##### `configuration_set_name`<sup>Optional</sup> <a name="configuration_set_name" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.configurationSetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#configuration_set_name Sesv2EmailIdentity#configuration_set_name}.

---

##### `dkim_signing_attributes`<sup>Optional</sup> <a name="dkim_signing_attributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.dkimSigningAttributes"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a>

dkim_signing_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#dkim_signing_attributes Sesv2EmailIdentity#dkim_signing_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#id Sesv2EmailIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags Sesv2EmailIdentity#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags_all Sesv2EmailIdentity#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.putDkimSigningAttributes">put_dkim_signing_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetConfigurationSetName">reset_configuration_set_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetDkimSigningAttributes">reset_dkim_signing_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_dkim_signing_attributes` <a name="put_dkim_signing_attributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.putDkimSigningAttributes"></a>

```python
def put_dkim_signing_attributes(
  domain_signing_private_key: str = None,
  domain_signing_selector: str = None,
  next_signing_key_length: str = None
) -> None
```

###### `domain_signing_private_key`<sup>Optional</sup> <a name="domain_signing_private_key" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.putDkimSigningAttributes.parameter.domainSigningPrivateKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#domain_signing_private_key Sesv2EmailIdentity#domain_signing_private_key}.

---

###### `domain_signing_selector`<sup>Optional</sup> <a name="domain_signing_selector" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.putDkimSigningAttributes.parameter.domainSigningSelector"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#domain_signing_selector Sesv2EmailIdentity#domain_signing_selector}.

---

###### `next_signing_key_length`<sup>Optional</sup> <a name="next_signing_key_length" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.putDkimSigningAttributes.parameter.nextSigningKeyLength"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#next_signing_key_length Sesv2EmailIdentity#next_signing_key_length}.

---

##### `reset_configuration_set_name` <a name="reset_configuration_set_name" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetConfigurationSetName"></a>

```python
def reset_configuration_set_name() -> None
```

##### `reset_dkim_signing_attributes` <a name="reset_dkim_signing_attributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetDkimSigningAttributes"></a>

```python
def reset_dkim_signing_attributes() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_email_identity

sesv2EmailIdentity.Sesv2EmailIdentity.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_email_identity

sesv2EmailIdentity.Sesv2EmailIdentity.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_email_identity

sesv2EmailIdentity.Sesv2EmailIdentity.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dkimSigningAttributes">dkim_signing_attributes</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference">Sesv2EmailIdentityDkimSigningAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.identityType">identity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.verifiedForSendingStatus">verified_for_sending_status</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.configurationSetNameInput">configuration_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dkimSigningAttributesInput">dkim_signing_attributes_input</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.emailIdentityInput">email_identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.configurationSetName">configuration_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.emailIdentity">email_identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `dkim_signing_attributes`<sup>Required</sup> <a name="dkim_signing_attributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dkimSigningAttributes"></a>

```python
dkim_signing_attributes: Sesv2EmailIdentityDkimSigningAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference">Sesv2EmailIdentityDkimSigningAttributesOutputReference</a>

---

##### `identity_type`<sup>Required</sup> <a name="identity_type" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.identityType"></a>

```python
identity_type: str
```

- *Type:* str

---

##### `verified_for_sending_status`<sup>Required</sup> <a name="verified_for_sending_status" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.verifiedForSendingStatus"></a>

```python
verified_for_sending_status: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `configuration_set_name_input`<sup>Optional</sup> <a name="configuration_set_name_input" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.configurationSetNameInput"></a>

```python
configuration_set_name_input: str
```

- *Type:* str

---

##### `dkim_signing_attributes_input`<sup>Optional</sup> <a name="dkim_signing_attributes_input" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dkimSigningAttributesInput"></a>

```python
dkim_signing_attributes_input: Sesv2EmailIdentityDkimSigningAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a>

---

##### `email_identity_input`<sup>Optional</sup> <a name="email_identity_input" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.emailIdentityInput"></a>

```python
email_identity_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `configuration_set_name`<sup>Required</sup> <a name="configuration_set_name" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.configurationSetName"></a>

```python
configuration_set_name: str
```

- *Type:* str

---

##### `email_identity`<sup>Required</sup> <a name="email_identity" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.emailIdentity"></a>

```python
email_identity: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2EmailIdentityConfig <a name="Sesv2EmailIdentityConfig" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_email_identity

sesv2EmailIdentity.Sesv2EmailIdentityConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email_identity: str,
  configuration_set_name: str = None,
  dkim_signing_attributes: Sesv2EmailIdentityDkimSigningAttributes = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.emailIdentity">email_identity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#email_identity Sesv2EmailIdentity#email_identity}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.configurationSetName">configuration_set_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#configuration_set_name Sesv2EmailIdentity#configuration_set_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.dkimSigningAttributes">dkim_signing_attributes</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a></code> | dkim_signing_attributes block. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#id Sesv2EmailIdentity#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags Sesv2EmailIdentity#tags}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags_all Sesv2EmailIdentity#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email_identity`<sup>Required</sup> <a name="email_identity" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.emailIdentity"></a>

```python
email_identity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#email_identity Sesv2EmailIdentity#email_identity}.

---

##### `configuration_set_name`<sup>Optional</sup> <a name="configuration_set_name" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.configurationSetName"></a>

```python
configuration_set_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#configuration_set_name Sesv2EmailIdentity#configuration_set_name}.

---

##### `dkim_signing_attributes`<sup>Optional</sup> <a name="dkim_signing_attributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.dkimSigningAttributes"></a>

```python
dkim_signing_attributes: Sesv2EmailIdentityDkimSigningAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a>

dkim_signing_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#dkim_signing_attributes Sesv2EmailIdentity#dkim_signing_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#id Sesv2EmailIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags Sesv2EmailIdentity#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags_all Sesv2EmailIdentity#tags_all}.

---

### Sesv2EmailIdentityDkimSigningAttributes <a name="Sesv2EmailIdentityDkimSigningAttributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_email_identity

sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes(
  domain_signing_private_key: str = None,
  domain_signing_selector: str = None,
  next_signing_key_length: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.domainSigningPrivateKey">domain_signing_private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#domain_signing_private_key Sesv2EmailIdentity#domain_signing_private_key}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.domainSigningSelector">domain_signing_selector</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#domain_signing_selector Sesv2EmailIdentity#domain_signing_selector}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.nextSigningKeyLength">next_signing_key_length</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#next_signing_key_length Sesv2EmailIdentity#next_signing_key_length}. |

---

##### `domain_signing_private_key`<sup>Optional</sup> <a name="domain_signing_private_key" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.domainSigningPrivateKey"></a>

```python
domain_signing_private_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#domain_signing_private_key Sesv2EmailIdentity#domain_signing_private_key}.

---

##### `domain_signing_selector`<sup>Optional</sup> <a name="domain_signing_selector" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.domainSigningSelector"></a>

```python
domain_signing_selector: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#domain_signing_selector Sesv2EmailIdentity#domain_signing_selector}.

---

##### `next_signing_key_length`<sup>Optional</sup> <a name="next_signing_key_length" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.nextSigningKeyLength"></a>

```python
next_signing_key_length: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#next_signing_key_length Sesv2EmailIdentity#next_signing_key_length}.

---

## Classes <a name="Classes" id="Classes"></a>

### Sesv2EmailIdentityDkimSigningAttributesOutputReference <a name="Sesv2EmailIdentityDkimSigningAttributesOutputReference" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import sesv2_email_identity

sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningPrivateKey">reset_domain_signing_private_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningSelector">reset_domain_signing_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetNextSigningKeyLength">reset_next_signing_key_length</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_domain_signing_private_key` <a name="reset_domain_signing_private_key" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningPrivateKey"></a>

```python
def reset_domain_signing_private_key() -> None
```

##### `reset_domain_signing_selector` <a name="reset_domain_signing_selector" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningSelector"></a>

```python
def reset_domain_signing_selector() -> None
```

##### `reset_next_signing_key_length` <a name="reset_next_signing_key_length" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetNextSigningKeyLength"></a>

```python
def reset_next_signing_key_length() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.currentSigningKeyLength">current_signing_key_length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.lastKeyGenerationTimestamp">last_key_generation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.signingAttributesOrigin">signing_attributes_origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.tokens">tokens</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKeyInput">domain_signing_private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelectorInput">domain_signing_selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLengthInput">next_signing_key_length_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey">domain_signing_private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector">domain_signing_selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength">next_signing_key_length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_signing_key_length`<sup>Required</sup> <a name="current_signing_key_length" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.currentSigningKeyLength"></a>

```python
current_signing_key_length: str
```

- *Type:* str

---

##### `last_key_generation_timestamp`<sup>Required</sup> <a name="last_key_generation_timestamp" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.lastKeyGenerationTimestamp"></a>

```python
last_key_generation_timestamp: str
```

- *Type:* str

---

##### `signing_attributes_origin`<sup>Required</sup> <a name="signing_attributes_origin" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.signingAttributesOrigin"></a>

```python
signing_attributes_origin: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.tokens"></a>

```python
tokens: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domain_signing_private_key_input`<sup>Optional</sup> <a name="domain_signing_private_key_input" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKeyInput"></a>

```python
domain_signing_private_key_input: str
```

- *Type:* str

---

##### `domain_signing_selector_input`<sup>Optional</sup> <a name="domain_signing_selector_input" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelectorInput"></a>

```python
domain_signing_selector_input: str
```

- *Type:* str

---

##### `next_signing_key_length_input`<sup>Optional</sup> <a name="next_signing_key_length_input" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLengthInput"></a>

```python
next_signing_key_length_input: str
```

- *Type:* str

---

##### `domain_signing_private_key`<sup>Required</sup> <a name="domain_signing_private_key" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey"></a>

```python
domain_signing_private_key: str
```

- *Type:* str

---

##### `domain_signing_selector`<sup>Required</sup> <a name="domain_signing_selector" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector"></a>

```python
domain_signing_selector: str
```

- *Type:* str

---

##### `next_signing_key_length`<sup>Required</sup> <a name="next_signing_key_length" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength"></a>

```python
next_signing_key_length: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.internalValue"></a>

```python
internal_value: Sesv2EmailIdentityDkimSigningAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a>

---



