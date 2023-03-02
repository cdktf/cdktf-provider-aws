# `elasticsearchDomainSamlOptions` Submodule <a name="`elasticsearchDomainSamlOptions` Submodule" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticsearchDomainSamlOptions <a name="ElasticsearchDomainSamlOptions" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options aws_elasticsearch_domain_saml_options}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain_saml_options

elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str,
  id: str = None,
  saml_options: ElasticsearchDomainSamlOptionsSamlOptions = None,
  timeouts: ElasticsearchDomainSamlOptionsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#domain_name ElasticsearchDomainSamlOptions#domain_name}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#id ElasticsearchDomainSamlOptions#id}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.samlOptions">saml_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions">ElasticsearchDomainSamlOptionsSamlOptions</a></code> | saml_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts">ElasticsearchDomainSamlOptionsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#domain_name ElasticsearchDomainSamlOptions#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#id ElasticsearchDomainSamlOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `saml_options`<sup>Optional</sup> <a name="saml_options" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.samlOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions">ElasticsearchDomainSamlOptionsSamlOptions</a>

saml_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#saml_options ElasticsearchDomainSamlOptions#saml_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts">ElasticsearchDomainSamlOptionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#timeouts ElasticsearchDomainSamlOptions#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.putSamlOptions">put_saml_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.resetSamlOptions">reset_saml_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_saml_options` <a name="put_saml_options" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.putSamlOptions"></a>

```python
def put_saml_options(
  enabled: typing.Union[bool, IResolvable] = None,
  idp: ElasticsearchDomainSamlOptionsSamlOptionsIdp = None,
  master_backend_role: str = None,
  master_user_name: str = None,
  roles_key: str = None,
  session_timeout_minutes: typing.Union[int, float] = None,
  subject_key: str = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.putSamlOptions.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#enabled ElasticsearchDomainSamlOptions#enabled}.

---

###### `idp`<sup>Optional</sup> <a name="idp" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.putSamlOptions.parameter.idp"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp">ElasticsearchDomainSamlOptionsSamlOptionsIdp</a>

idp block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#idp ElasticsearchDomainSamlOptions#idp}

---

###### `master_backend_role`<sup>Optional</sup> <a name="master_backend_role" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.putSamlOptions.parameter.masterBackendRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#master_backend_role ElasticsearchDomainSamlOptions#master_backend_role}.

---

###### `master_user_name`<sup>Optional</sup> <a name="master_user_name" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.putSamlOptions.parameter.masterUserName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#master_user_name ElasticsearchDomainSamlOptions#master_user_name}.

---

###### `roles_key`<sup>Optional</sup> <a name="roles_key" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.putSamlOptions.parameter.rolesKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#roles_key ElasticsearchDomainSamlOptions#roles_key}.

---

###### `session_timeout_minutes`<sup>Optional</sup> <a name="session_timeout_minutes" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.putSamlOptions.parameter.sessionTimeoutMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#session_timeout_minutes ElasticsearchDomainSamlOptions#session_timeout_minutes}.

---

###### `subject_key`<sup>Optional</sup> <a name="subject_key" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.putSamlOptions.parameter.subjectKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#subject_key ElasticsearchDomainSamlOptions#subject_key}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.putTimeouts"></a>

```python
def put_timeouts(
  delete: str = None,
  update: str = None
) -> None
```

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#delete ElasticsearchDomainSamlOptions#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#update ElasticsearchDomainSamlOptions#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_saml_options` <a name="reset_saml_options" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.resetSamlOptions"></a>

```python
def reset_saml_options() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain_saml_options

elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain_saml_options

elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain_saml_options

elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.samlOptions">saml_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference">ElasticsearchDomainSamlOptionsSamlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference">ElasticsearchDomainSamlOptionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.samlOptionsInput">saml_options_input</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions">ElasticsearchDomainSamlOptionsSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts">ElasticsearchDomainSamlOptionsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `saml_options`<sup>Required</sup> <a name="saml_options" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.samlOptions"></a>

```python
saml_options: ElasticsearchDomainSamlOptionsSamlOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference">ElasticsearchDomainSamlOptionsSamlOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.timeouts"></a>

```python
timeouts: ElasticsearchDomainSamlOptionsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference">ElasticsearchDomainSamlOptionsTimeoutsOutputReference</a>

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `saml_options_input`<sup>Optional</sup> <a name="saml_options_input" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.samlOptionsInput"></a>

```python
saml_options_input: ElasticsearchDomainSamlOptionsSamlOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions">ElasticsearchDomainSamlOptionsSamlOptions</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ElasticsearchDomainSamlOptionsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts">ElasticsearchDomainSamlOptionsTimeouts</a>, cdktf.IResolvable]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticsearchDomainSamlOptionsConfig <a name="ElasticsearchDomainSamlOptionsConfig" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain_saml_options

elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str,
  id: str = None,
  saml_options: ElasticsearchDomainSamlOptionsSamlOptions = None,
  timeouts: ElasticsearchDomainSamlOptionsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#domain_name ElasticsearchDomainSamlOptions#domain_name}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#id ElasticsearchDomainSamlOptions#id}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.samlOptions">saml_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions">ElasticsearchDomainSamlOptionsSamlOptions</a></code> | saml_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts">ElasticsearchDomainSamlOptionsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#domain_name ElasticsearchDomainSamlOptions#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#id ElasticsearchDomainSamlOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `saml_options`<sup>Optional</sup> <a name="saml_options" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.samlOptions"></a>

```python
saml_options: ElasticsearchDomainSamlOptionsSamlOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions">ElasticsearchDomainSamlOptionsSamlOptions</a>

saml_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#saml_options ElasticsearchDomainSamlOptions#saml_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsConfig.property.timeouts"></a>

```python
timeouts: ElasticsearchDomainSamlOptionsTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts">ElasticsearchDomainSamlOptionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#timeouts ElasticsearchDomainSamlOptions#timeouts}

---

### ElasticsearchDomainSamlOptionsSamlOptions <a name="ElasticsearchDomainSamlOptionsSamlOptions" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain_saml_options

elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions(
  enabled: typing.Union[bool, IResolvable] = None,
  idp: ElasticsearchDomainSamlOptionsSamlOptionsIdp = None,
  master_backend_role: str = None,
  master_user_name: str = None,
  roles_key: str = None,
  session_timeout_minutes: typing.Union[int, float] = None,
  subject_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#enabled ElasticsearchDomainSamlOptions#enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.idp">idp</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp">ElasticsearchDomainSamlOptionsSamlOptionsIdp</a></code> | idp block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.masterBackendRole">master_backend_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#master_backend_role ElasticsearchDomainSamlOptions#master_backend_role}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.masterUserName">master_user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#master_user_name ElasticsearchDomainSamlOptions#master_user_name}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.rolesKey">roles_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#roles_key ElasticsearchDomainSamlOptions#roles_key}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.sessionTimeoutMinutes">session_timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#session_timeout_minutes ElasticsearchDomainSamlOptions#session_timeout_minutes}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.subjectKey">subject_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#subject_key ElasticsearchDomainSamlOptions#subject_key}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#enabled ElasticsearchDomainSamlOptions#enabled}.

---

##### `idp`<sup>Optional</sup> <a name="idp" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.idp"></a>

```python
idp: ElasticsearchDomainSamlOptionsSamlOptionsIdp
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp">ElasticsearchDomainSamlOptionsSamlOptionsIdp</a>

idp block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#idp ElasticsearchDomainSamlOptions#idp}

---

##### `master_backend_role`<sup>Optional</sup> <a name="master_backend_role" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.masterBackendRole"></a>

```python
master_backend_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#master_backend_role ElasticsearchDomainSamlOptions#master_backend_role}.

---

##### `master_user_name`<sup>Optional</sup> <a name="master_user_name" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.masterUserName"></a>

```python
master_user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#master_user_name ElasticsearchDomainSamlOptions#master_user_name}.

---

##### `roles_key`<sup>Optional</sup> <a name="roles_key" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.rolesKey"></a>

```python
roles_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#roles_key ElasticsearchDomainSamlOptions#roles_key}.

---

##### `session_timeout_minutes`<sup>Optional</sup> <a name="session_timeout_minutes" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.sessionTimeoutMinutes"></a>

```python
session_timeout_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#session_timeout_minutes ElasticsearchDomainSamlOptions#session_timeout_minutes}.

---

##### `subject_key`<sup>Optional</sup> <a name="subject_key" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions.property.subjectKey"></a>

```python
subject_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#subject_key ElasticsearchDomainSamlOptions#subject_key}.

---

### ElasticsearchDomainSamlOptionsSamlOptionsIdp <a name="ElasticsearchDomainSamlOptionsSamlOptionsIdp" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain_saml_options

elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp(
  entity_id: str,
  metadata_content: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp.property.entityId">entity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#entity_id ElasticsearchDomainSamlOptions#entity_id}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp.property.metadataContent">metadata_content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#metadata_content ElasticsearchDomainSamlOptions#metadata_content}. |

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#entity_id ElasticsearchDomainSamlOptions#entity_id}.

---

##### `metadata_content`<sup>Required</sup> <a name="metadata_content" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp.property.metadataContent"></a>

```python
metadata_content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#metadata_content ElasticsearchDomainSamlOptions#metadata_content}.

---

### ElasticsearchDomainSamlOptionsTimeouts <a name="ElasticsearchDomainSamlOptionsTimeouts" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain_saml_options

elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts(
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#delete ElasticsearchDomainSamlOptions#delete}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#update ElasticsearchDomainSamlOptions#update}. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#delete ElasticsearchDomainSamlOptions#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#update ElasticsearchDomainSamlOptions#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference <a name="ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain_saml_options

elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.entityIdInput">entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.metadataContentInput">metadata_content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.metadataContent">metadata_content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp">ElasticsearchDomainSamlOptionsSamlOptionsIdp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_id_input`<sup>Optional</sup> <a name="entity_id_input" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.entityIdInput"></a>

```python
entity_id_input: str
```

- *Type:* str

---

##### `metadata_content_input`<sup>Optional</sup> <a name="metadata_content_input" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.metadataContentInput"></a>

```python
metadata_content_input: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `metadata_content`<sup>Required</sup> <a name="metadata_content" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.metadataContent"></a>

```python
metadata_content: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference.property.internalValue"></a>

```python
internal_value: ElasticsearchDomainSamlOptionsSamlOptionsIdp
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp">ElasticsearchDomainSamlOptionsSamlOptionsIdp</a>

---


### ElasticsearchDomainSamlOptionsSamlOptionsOutputReference <a name="ElasticsearchDomainSamlOptionsSamlOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain_saml_options

elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.putIdp">put_idp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetIdp">reset_idp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetMasterBackendRole">reset_master_backend_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetMasterUserName">reset_master_user_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetRolesKey">reset_roles_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetSessionTimeoutMinutes">reset_session_timeout_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetSubjectKey">reset_subject_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_idp` <a name="put_idp" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.putIdp"></a>

```python
def put_idp(
  entity_id: str,
  metadata_content: str
) -> None
```

###### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.putIdp.parameter.entityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#entity_id ElasticsearchDomainSamlOptions#entity_id}.

---

###### `metadata_content`<sup>Required</sup> <a name="metadata_content" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.putIdp.parameter.metadataContent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options#metadata_content ElasticsearchDomainSamlOptions#metadata_content}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_idp` <a name="reset_idp" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetIdp"></a>

```python
def reset_idp() -> None
```

##### `reset_master_backend_role` <a name="reset_master_backend_role" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetMasterBackendRole"></a>

```python
def reset_master_backend_role() -> None
```

##### `reset_master_user_name` <a name="reset_master_user_name" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetMasterUserName"></a>

```python
def reset_master_user_name() -> None
```

##### `reset_roles_key` <a name="reset_roles_key" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetRolesKey"></a>

```python
def reset_roles_key() -> None
```

##### `reset_session_timeout_minutes` <a name="reset_session_timeout_minutes" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetSessionTimeoutMinutes"></a>

```python
def reset_session_timeout_minutes() -> None
```

##### `reset_subject_key` <a name="reset_subject_key" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.resetSubjectKey"></a>

```python
def reset_subject_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.idp">idp</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference">ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.idpInput">idp_input</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp">ElasticsearchDomainSamlOptionsSamlOptionsIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.masterBackendRoleInput">master_backend_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.masterUserNameInput">master_user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.rolesKeyInput">roles_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutesInput">session_timeout_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.subjectKeyInput">subject_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.masterBackendRole">master_backend_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.masterUserName">master_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.rolesKey">roles_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutes">session_timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.subjectKey">subject_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions">ElasticsearchDomainSamlOptionsSamlOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idp`<sup>Required</sup> <a name="idp" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.idp"></a>

```python
idp: ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference">ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `idp_input`<sup>Optional</sup> <a name="idp_input" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.idpInput"></a>

```python
idp_input: ElasticsearchDomainSamlOptionsSamlOptionsIdp
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsIdp">ElasticsearchDomainSamlOptionsSamlOptionsIdp</a>

---

##### `master_backend_role_input`<sup>Optional</sup> <a name="master_backend_role_input" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.masterBackendRoleInput"></a>

```python
master_backend_role_input: str
```

- *Type:* str

---

##### `master_user_name_input`<sup>Optional</sup> <a name="master_user_name_input" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.masterUserNameInput"></a>

```python
master_user_name_input: str
```

- *Type:* str

---

##### `roles_key_input`<sup>Optional</sup> <a name="roles_key_input" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.rolesKeyInput"></a>

```python
roles_key_input: str
```

- *Type:* str

---

##### `session_timeout_minutes_input`<sup>Optional</sup> <a name="session_timeout_minutes_input" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutesInput"></a>

```python
session_timeout_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subject_key_input`<sup>Optional</sup> <a name="subject_key_input" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.subjectKeyInput"></a>

```python
subject_key_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `master_backend_role`<sup>Required</sup> <a name="master_backend_role" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.masterBackendRole"></a>

```python
master_backend_role: str
```

- *Type:* str

---

##### `master_user_name`<sup>Required</sup> <a name="master_user_name" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.masterUserName"></a>

```python
master_user_name: str
```

- *Type:* str

---

##### `roles_key`<sup>Required</sup> <a name="roles_key" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.rolesKey"></a>

```python
roles_key: str
```

- *Type:* str

---

##### `session_timeout_minutes`<sup>Required</sup> <a name="session_timeout_minutes" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.sessionTimeoutMinutes"></a>

```python
session_timeout_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subject_key`<sup>Required</sup> <a name="subject_key" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.subjectKey"></a>

```python
subject_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ElasticsearchDomainSamlOptionsSamlOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsSamlOptions">ElasticsearchDomainSamlOptionsSamlOptions</a>

---


### ElasticsearchDomainSamlOptionsTimeoutsOutputReference <a name="ElasticsearchDomainSamlOptionsTimeoutsOutputReference" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain_saml_options

elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts">ElasticsearchDomainSamlOptionsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ElasticsearchDomainSamlOptionsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.elasticsearchDomainSamlOptions.ElasticsearchDomainSamlOptionsTimeouts">ElasticsearchDomainSamlOptionsTimeouts</a>, cdktf.IResolvable]

---



