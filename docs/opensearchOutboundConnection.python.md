# `opensearchOutboundConnection` Submodule <a name="`opensearchOutboundConnection` Submodule" id="@cdktf/provider-aws.opensearchOutboundConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchOutboundConnection <a name="OpensearchOutboundConnection" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection aws_opensearch_outbound_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_outbound_connection

opensearchOutboundConnection.OpensearchOutboundConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_alias: str,
  local_domain_info: OpensearchOutboundConnectionLocalDomainInfo,
  remote_domain_info: OpensearchOutboundConnectionRemoteDomainInfo,
  id: str = None,
  timeouts: OpensearchOutboundConnectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.connectionAlias">connection_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#connection_alias OpensearchOutboundConnection#connection_alias}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.localDomainInfo">local_domain_info</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a></code> | local_domain_info block. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.remoteDomainInfo">remote_domain_info</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a></code> | remote_domain_info block. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#id OpensearchOutboundConnection#id}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_alias`<sup>Required</sup> <a name="connection_alias" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.connectionAlias"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#connection_alias OpensearchOutboundConnection#connection_alias}.

---

##### `local_domain_info`<sup>Required</sup> <a name="local_domain_info" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.localDomainInfo"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a>

local_domain_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#local_domain_info OpensearchOutboundConnection#local_domain_info}

---

##### `remote_domain_info`<sup>Required</sup> <a name="remote_domain_info" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.remoteDomainInfo"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a>

remote_domain_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#remote_domain_info OpensearchOutboundConnection#remote_domain_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#id OpensearchOutboundConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#timeouts OpensearchOutboundConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putLocalDomainInfo">put_local_domain_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putRemoteDomainInfo">put_remote_domain_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_local_domain_info` <a name="put_local_domain_info" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putLocalDomainInfo"></a>

```python
def put_local_domain_info(
  domain_name: str,
  owner_id: str,
  region: str
) -> None
```

###### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putLocalDomainInfo.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#domain_name OpensearchOutboundConnection#domain_name}.

---

###### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putLocalDomainInfo.parameter.ownerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#owner_id OpensearchOutboundConnection#owner_id}.

---

###### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putLocalDomainInfo.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#region OpensearchOutboundConnection#region}.

---

##### `put_remote_domain_info` <a name="put_remote_domain_info" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putRemoteDomainInfo"></a>

```python
def put_remote_domain_info(
  domain_name: str,
  owner_id: str,
  region: str
) -> None
```

###### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putRemoteDomainInfo.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#domain_name OpensearchOutboundConnection#domain_name}.

---

###### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putRemoteDomainInfo.parameter.ownerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#owner_id OpensearchOutboundConnection#owner_id}.

---

###### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putRemoteDomainInfo.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#region OpensearchOutboundConnection#region}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#create OpensearchOutboundConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#delete OpensearchOutboundConnection#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_outbound_connection

opensearchOutboundConnection.OpensearchOutboundConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_outbound_connection

opensearchOutboundConnection.OpensearchOutboundConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_outbound_connection

opensearchOutboundConnection.OpensearchOutboundConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionStatus">connection_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.localDomainInfo">local_domain_info</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference">OpensearchOutboundConnectionLocalDomainInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.remoteDomainInfo">remote_domain_info</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference">OpensearchOutboundConnectionRemoteDomainInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference">OpensearchOutboundConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionAliasInput">connection_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.localDomainInfoInput">local_domain_info_input</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.remoteDomainInfoInput">remote_domain_info_input</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionAlias">connection_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_status`<sup>Required</sup> <a name="connection_status" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionStatus"></a>

```python
connection_status: str
```

- *Type:* str

---

##### `local_domain_info`<sup>Required</sup> <a name="local_domain_info" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.localDomainInfo"></a>

```python
local_domain_info: OpensearchOutboundConnectionLocalDomainInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference">OpensearchOutboundConnectionLocalDomainInfoOutputReference</a>

---

##### `remote_domain_info`<sup>Required</sup> <a name="remote_domain_info" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.remoteDomainInfo"></a>

```python
remote_domain_info: OpensearchOutboundConnectionRemoteDomainInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference">OpensearchOutboundConnectionRemoteDomainInfoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.timeouts"></a>

```python
timeouts: OpensearchOutboundConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference">OpensearchOutboundConnectionTimeoutsOutputReference</a>

---

##### `connection_alias_input`<sup>Optional</sup> <a name="connection_alias_input" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionAliasInput"></a>

```python
connection_alias_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `local_domain_info_input`<sup>Optional</sup> <a name="local_domain_info_input" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.localDomainInfoInput"></a>

```python
local_domain_info_input: OpensearchOutboundConnectionLocalDomainInfo
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a>

---

##### `remote_domain_info_input`<sup>Optional</sup> <a name="remote_domain_info_input" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.remoteDomainInfoInput"></a>

```python
remote_domain_info_input: OpensearchOutboundConnectionRemoteDomainInfo
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[OpensearchOutboundConnectionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a>, cdktf.IResolvable]

---

##### `connection_alias`<sup>Required</sup> <a name="connection_alias" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionAlias"></a>

```python
connection_alias: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchOutboundConnectionConfig <a name="OpensearchOutboundConnectionConfig" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_outbound_connection

opensearchOutboundConnection.OpensearchOutboundConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_alias: str,
  local_domain_info: OpensearchOutboundConnectionLocalDomainInfo,
  remote_domain_info: OpensearchOutboundConnectionRemoteDomainInfo,
  id: str = None,
  timeouts: OpensearchOutboundConnectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connectionAlias">connection_alias</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#connection_alias OpensearchOutboundConnection#connection_alias}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.localDomainInfo">local_domain_info</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a></code> | local_domain_info block. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.remoteDomainInfo">remote_domain_info</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a></code> | remote_domain_info block. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#id OpensearchOutboundConnection#id}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_alias`<sup>Required</sup> <a name="connection_alias" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connectionAlias"></a>

```python
connection_alias: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#connection_alias OpensearchOutboundConnection#connection_alias}.

---

##### `local_domain_info`<sup>Required</sup> <a name="local_domain_info" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.localDomainInfo"></a>

```python
local_domain_info: OpensearchOutboundConnectionLocalDomainInfo
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a>

local_domain_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#local_domain_info OpensearchOutboundConnection#local_domain_info}

---

##### `remote_domain_info`<sup>Required</sup> <a name="remote_domain_info" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.remoteDomainInfo"></a>

```python
remote_domain_info: OpensearchOutboundConnectionRemoteDomainInfo
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a>

remote_domain_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#remote_domain_info OpensearchOutboundConnection#remote_domain_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#id OpensearchOutboundConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.timeouts"></a>

```python
timeouts: OpensearchOutboundConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#timeouts OpensearchOutboundConnection#timeouts}

---

### OpensearchOutboundConnectionLocalDomainInfo <a name="OpensearchOutboundConnectionLocalDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_outbound_connection

opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo(
  domain_name: str,
  owner_id: str,
  region: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#domain_name OpensearchOutboundConnection#domain_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.property.ownerId">owner_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#owner_id OpensearchOutboundConnection#owner_id}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#region OpensearchOutboundConnection#region}. |

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#domain_name OpensearchOutboundConnection#domain_name}.

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#owner_id OpensearchOutboundConnection#owner_id}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#region OpensearchOutboundConnection#region}.

---

### OpensearchOutboundConnectionRemoteDomainInfo <a name="OpensearchOutboundConnectionRemoteDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_outbound_connection

opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo(
  domain_name: str,
  owner_id: str,
  region: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#domain_name OpensearchOutboundConnection#domain_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.property.ownerId">owner_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#owner_id OpensearchOutboundConnection#owner_id}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#region OpensearchOutboundConnection#region}. |

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#domain_name OpensearchOutboundConnection#domain_name}.

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#owner_id OpensearchOutboundConnection#owner_id}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#region OpensearchOutboundConnection#region}.

---

### OpensearchOutboundConnectionTimeouts <a name="OpensearchOutboundConnectionTimeouts" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_outbound_connection

opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#create OpensearchOutboundConnection#create}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#delete OpensearchOutboundConnection#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#create OpensearchOutboundConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_outbound_connection#delete OpensearchOutboundConnection#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchOutboundConnectionLocalDomainInfoOutputReference <a name="OpensearchOutboundConnectionLocalDomainInfoOutputReference" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_outbound_connection

opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.ownerIdInput">owner_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `owner_id_input`<sup>Optional</sup> <a name="owner_id_input" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.ownerIdInput"></a>

```python
owner_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.internalValue"></a>

```python
internal_value: OpensearchOutboundConnectionLocalDomainInfo
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a>

---


### OpensearchOutboundConnectionRemoteDomainInfoOutputReference <a name="OpensearchOutboundConnectionRemoteDomainInfoOutputReference" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_outbound_connection

opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.ownerIdInput">owner_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `owner_id_input`<sup>Optional</sup> <a name="owner_id_input" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.ownerIdInput"></a>

```python
owner_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.internalValue"></a>

```python
internal_value: OpensearchOutboundConnectionRemoteDomainInfo
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a>

---


### OpensearchOutboundConnectionTimeoutsOutputReference <a name="OpensearchOutboundConnectionTimeoutsOutputReference" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_outbound_connection

opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[OpensearchOutboundConnectionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a>, cdktf.IResolvable]

---



