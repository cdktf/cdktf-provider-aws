# `codeartifactRepository` Submodule <a name="`codeartifactRepository` Submodule" id="@cdktf/provider-aws.codeartifactRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeartifactRepository <a name="CodeartifactRepository" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository aws_codeartifact_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codeartifact_repository

codeartifactRepository.CodeartifactRepository(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain: str,
  repository: str,
  description: str = None,
  domain_owner: str = None,
  external_connections: CodeartifactRepositoryExternalConnections = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  upstream: typing.Union[IResolvable, typing.List[CodeartifactRepositoryUpstream]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#domain CodeartifactRepository#domain}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.repository">repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#repository CodeartifactRepository#repository}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#description CodeartifactRepository#description}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.domainOwner">domain_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#domain_owner CodeartifactRepository#domain_owner}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.externalConnections">external_connections</a></code> | <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a></code> | external_connections block. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#id CodeartifactRepository#id}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#tags CodeartifactRepository#tags}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#tags_all CodeartifactRepository#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.upstream">upstream</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>]]</code> | upstream block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.domain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#domain CodeartifactRepository#domain}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.repository"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#repository CodeartifactRepository#repository}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#description CodeartifactRepository#description}.

---

##### `domain_owner`<sup>Optional</sup> <a name="domain_owner" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.domainOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#domain_owner CodeartifactRepository#domain_owner}.

---

##### `external_connections`<sup>Optional</sup> <a name="external_connections" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.externalConnections"></a>

- *Type:* <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a>

external_connections block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#external_connections CodeartifactRepository#external_connections}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#id CodeartifactRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#tags CodeartifactRepository#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#tags_all CodeartifactRepository#tags_all}.

---

##### `upstream`<sup>Optional</sup> <a name="upstream" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.Initializer.parameter.upstream"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>]]

upstream block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#upstream CodeartifactRepository#upstream}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.putExternalConnections">put_external_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.putUpstream">put_upstream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetDomainOwner">reset_domain_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetExternalConnections">reset_external_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetUpstream">reset_upstream</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_external_connections` <a name="put_external_connections" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.putExternalConnections"></a>

```python
def put_external_connections(
  external_connection_name: str
) -> None
```

###### `external_connection_name`<sup>Required</sup> <a name="external_connection_name" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.putExternalConnections.parameter.externalConnectionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#external_connection_name CodeartifactRepository#external_connection_name}.

---

##### `put_upstream` <a name="put_upstream" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.putUpstream"></a>

```python
def put_upstream(
  value: typing.Union[IResolvable, typing.List[CodeartifactRepositoryUpstream]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.putUpstream.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_domain_owner` <a name="reset_domain_owner" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetDomainOwner"></a>

```python
def reset_domain_owner() -> None
```

##### `reset_external_connections` <a name="reset_external_connections" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetExternalConnections"></a>

```python
def reset_external_connections() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_upstream` <a name="reset_upstream" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.resetUpstream"></a>

```python
def reset_upstream() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import codeartifact_repository

codeartifactRepository.CodeartifactRepository.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import codeartifact_repository

codeartifactRepository.CodeartifactRepository.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import codeartifact_repository

codeartifactRepository.CodeartifactRepository.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.administratorAccount">administrator_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.externalConnections">external_connections</a></code> | <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference">CodeartifactRepositoryExternalConnectionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.upstream">upstream</a></code> | <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList">CodeartifactRepositoryUpstreamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.domainOwnerInput">domain_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.externalConnectionsInput">external_connections_input</a></code> | <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.upstreamInput">upstream_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.domainOwner">domain_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `administrator_account`<sup>Required</sup> <a name="administrator_account" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.administratorAccount"></a>

```python
administrator_account: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `external_connections`<sup>Required</sup> <a name="external_connections" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.externalConnections"></a>

```python
external_connections: CodeartifactRepositoryExternalConnectionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference">CodeartifactRepositoryExternalConnectionsOutputReference</a>

---

##### `upstream`<sup>Required</sup> <a name="upstream" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.upstream"></a>

```python
upstream: CodeartifactRepositoryUpstreamList
```

- *Type:* <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList">CodeartifactRepositoryUpstreamList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `domain_owner_input`<sup>Optional</sup> <a name="domain_owner_input" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.domainOwnerInput"></a>

```python
domain_owner_input: str
```

- *Type:* str

---

##### `external_connections_input`<sup>Optional</sup> <a name="external_connections_input" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.externalConnectionsInput"></a>

```python
external_connections_input: CodeartifactRepositoryExternalConnections
```

- *Type:* <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `upstream_input`<sup>Optional</sup> <a name="upstream_input" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.upstreamInput"></a>

```python
upstream_input: typing.Union[IResolvable, typing.List[CodeartifactRepositoryUpstream]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `domain_owner`<sup>Required</sup> <a name="domain_owner" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.domainOwner"></a>

```python
domain_owner: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepository.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodeartifactRepositoryConfig <a name="CodeartifactRepositoryConfig" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codeartifact_repository

codeartifactRepository.CodeartifactRepositoryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain: str,
  repository: str,
  description: str = None,
  domain_owner: str = None,
  external_connections: CodeartifactRepositoryExternalConnections = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  upstream: typing.Union[IResolvable, typing.List[CodeartifactRepositoryUpstream]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#domain CodeartifactRepository#domain}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.repository">repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#repository CodeartifactRepository#repository}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#description CodeartifactRepository#description}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.domainOwner">domain_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#domain_owner CodeartifactRepository#domain_owner}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.externalConnections">external_connections</a></code> | <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a></code> | external_connections block. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#id CodeartifactRepository#id}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#tags CodeartifactRepository#tags}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#tags_all CodeartifactRepository#tags_all}. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.upstream">upstream</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>]]</code> | upstream block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#domain CodeartifactRepository#domain}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#repository CodeartifactRepository#repository}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#description CodeartifactRepository#description}.

---

##### `domain_owner`<sup>Optional</sup> <a name="domain_owner" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.domainOwner"></a>

```python
domain_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#domain_owner CodeartifactRepository#domain_owner}.

---

##### `external_connections`<sup>Optional</sup> <a name="external_connections" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.externalConnections"></a>

```python
external_connections: CodeartifactRepositoryExternalConnections
```

- *Type:* <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a>

external_connections block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#external_connections CodeartifactRepository#external_connections}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#id CodeartifactRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#tags CodeartifactRepository#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#tags_all CodeartifactRepository#tags_all}.

---

##### `upstream`<sup>Optional</sup> <a name="upstream" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryConfig.property.upstream"></a>

```python
upstream: typing.Union[IResolvable, typing.List[CodeartifactRepositoryUpstream]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>]]

upstream block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#upstream CodeartifactRepository#upstream}

---

### CodeartifactRepositoryExternalConnections <a name="CodeartifactRepositoryExternalConnections" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codeartifact_repository

codeartifactRepository.CodeartifactRepositoryExternalConnections(
  external_connection_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections.property.externalConnectionName">external_connection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#external_connection_name CodeartifactRepository#external_connection_name}. |

---

##### `external_connection_name`<sup>Required</sup> <a name="external_connection_name" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections.property.externalConnectionName"></a>

```python
external_connection_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#external_connection_name CodeartifactRepository#external_connection_name}.

---

### CodeartifactRepositoryUpstream <a name="CodeartifactRepositoryUpstream" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codeartifact_repository

codeartifactRepository.CodeartifactRepositoryUpstream(
  repository_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream.property.repositoryName">repository_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#repository_name CodeartifactRepository#repository_name}. |

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository#repository_name CodeartifactRepository#repository_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodeartifactRepositoryExternalConnectionsOutputReference <a name="CodeartifactRepositoryExternalConnectionsOutputReference" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codeartifact_repository

codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.packageFormat">package_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.externalConnectionNameInput">external_connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.externalConnectionName">external_connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `package_format`<sup>Required</sup> <a name="package_format" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.packageFormat"></a>

```python
package_format: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `external_connection_name_input`<sup>Optional</sup> <a name="external_connection_name_input" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.externalConnectionNameInput"></a>

```python
external_connection_name_input: str
```

- *Type:* str

---

##### `external_connection_name`<sup>Required</sup> <a name="external_connection_name" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.externalConnectionName"></a>

```python
external_connection_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: CodeartifactRepositoryExternalConnections
```

- *Type:* <a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryExternalConnections">CodeartifactRepositoryExternalConnections</a>

---


### CodeartifactRepositoryUpstreamList <a name="CodeartifactRepositoryUpstreamList" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codeartifact_repository

codeartifactRepository.CodeartifactRepositoryUpstreamList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodeartifactRepositoryUpstreamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CodeartifactRepositoryUpstream]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>]]

---


### CodeartifactRepositoryUpstreamOutputReference <a name="CodeartifactRepositoryUpstreamOutputReference" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codeartifact_repository

codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.repositoryNameInput">repository_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_name_input`<sup>Optional</sup> <a name="repository_name_input" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.repositoryNameInput"></a>

```python
repository_name_input: str
```

- *Type:* str

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstreamOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CodeartifactRepositoryUpstream, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.codeartifactRepository.CodeartifactRepositoryUpstream">CodeartifactRepositoryUpstream</a>, cdktf.IResolvable]

---



