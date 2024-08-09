# `opensearchOutboundConnection` Submodule <a name="`opensearchOutboundConnection` Submodule" id="@cdktf/provider-aws.opensearchOutboundConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchOutboundConnection <a name="OpensearchOutboundConnection" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection aws_opensearch_outbound_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_outbound_connection.OpensearchOutboundConnection;

OpensearchOutboundConnection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .connectionAlias(java.lang.String)
    .localDomainInfo(OpensearchOutboundConnectionLocalDomainInfo)
    .remoteDomainInfo(OpensearchOutboundConnectionRemoteDomainInfo)
//  .acceptConnection(java.lang.Boolean)
//  .acceptConnection(IResolvable)
//  .connectionMode(java.lang.String)
//  .connectionProperties(OpensearchOutboundConnectionConnectionProperties)
//  .id(java.lang.String)
//  .timeouts(OpensearchOutboundConnectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.connectionAlias">connectionAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#connection_alias OpensearchOutboundConnection#connection_alias}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.localDomainInfo">localDomainInfo</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a></code> | local_domain_info block. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.remoteDomainInfo">remoteDomainInfo</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a></code> | remote_domain_info block. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.acceptConnection">acceptConnection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#accept_connection OpensearchOutboundConnection#accept_connection}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.connectionMode">connectionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#connection_mode OpensearchOutboundConnection#connection_mode}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.connectionProperties">connectionProperties</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties">OpensearchOutboundConnectionConnectionProperties</a></code> | connection_properties block. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#id OpensearchOutboundConnection#id}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionAlias`<sup>Required</sup> <a name="connectionAlias" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.connectionAlias"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#connection_alias OpensearchOutboundConnection#connection_alias}.

---

##### `localDomainInfo`<sup>Required</sup> <a name="localDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.localDomainInfo"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a>

local_domain_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#local_domain_info OpensearchOutboundConnection#local_domain_info}

---

##### `remoteDomainInfo`<sup>Required</sup> <a name="remoteDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.remoteDomainInfo"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a>

remote_domain_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#remote_domain_info OpensearchOutboundConnection#remote_domain_info}

---

##### `acceptConnection`<sup>Optional</sup> <a name="acceptConnection" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.acceptConnection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#accept_connection OpensearchOutboundConnection#accept_connection}.

---

##### `connectionMode`<sup>Optional</sup> <a name="connectionMode" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.connectionMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#connection_mode OpensearchOutboundConnection#connection_mode}.

---

##### `connectionProperties`<sup>Optional</sup> <a name="connectionProperties" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.connectionProperties"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties">OpensearchOutboundConnectionConnectionProperties</a>

connection_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#connection_properties OpensearchOutboundConnection#connection_properties}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#id OpensearchOutboundConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#timeouts OpensearchOutboundConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putConnectionProperties">putConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putLocalDomainInfo">putLocalDomainInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putRemoteDomainInfo">putRemoteDomainInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetAcceptConnection">resetAcceptConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetConnectionMode">resetConnectionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetConnectionProperties">resetConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectionProperties` <a name="putConnectionProperties" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putConnectionProperties"></a>

```java
public void putConnectionProperties(OpensearchOutboundConnectionConnectionProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putConnectionProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties">OpensearchOutboundConnectionConnectionProperties</a>

---

##### `putLocalDomainInfo` <a name="putLocalDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putLocalDomainInfo"></a>

```java
public void putLocalDomainInfo(OpensearchOutboundConnectionLocalDomainInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putLocalDomainInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a>

---

##### `putRemoteDomainInfo` <a name="putRemoteDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putRemoteDomainInfo"></a>

```java
public void putRemoteDomainInfo(OpensearchOutboundConnectionRemoteDomainInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putRemoteDomainInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putTimeouts"></a>

```java
public void putTimeouts(OpensearchOutboundConnectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a>

---

##### `resetAcceptConnection` <a name="resetAcceptConnection" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetAcceptConnection"></a>

```java
public void resetAcceptConnection()
```

##### `resetConnectionMode` <a name="resetConnectionMode" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetConnectionMode"></a>

```java
public void resetConnectionMode()
```

##### `resetConnectionProperties` <a name="resetConnectionProperties" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetConnectionProperties"></a>

```java
public void resetConnectionProperties()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpensearchOutboundConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_outbound_connection.OpensearchOutboundConnection;

OpensearchOutboundConnection.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_outbound_connection.OpensearchOutboundConnection;

OpensearchOutboundConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_outbound_connection.OpensearchOutboundConnection;

OpensearchOutboundConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_outbound_connection.OpensearchOutboundConnection;

OpensearchOutboundConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OpensearchOutboundConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OpensearchOutboundConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OpensearchOutboundConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OpensearchOutboundConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OpensearchOutboundConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionProperties">connectionProperties</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference">OpensearchOutboundConnectionConnectionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionStatus">connectionStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.localDomainInfo">localDomainInfo</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference">OpensearchOutboundConnectionLocalDomainInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.remoteDomainInfo">remoteDomainInfo</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference">OpensearchOutboundConnectionRemoteDomainInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference">OpensearchOutboundConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.acceptConnectionInput">acceptConnectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionAliasInput">connectionAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionModeInput">connectionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionPropertiesInput">connectionPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties">OpensearchOutboundConnectionConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.localDomainInfoInput">localDomainInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.remoteDomainInfoInput">remoteDomainInfoInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.acceptConnection">acceptConnection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionAlias">connectionAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionMode">connectionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionProperties`<sup>Required</sup> <a name="connectionProperties" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionProperties"></a>

```java
public OpensearchOutboundConnectionConnectionPropertiesOutputReference getConnectionProperties();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference">OpensearchOutboundConnectionConnectionPropertiesOutputReference</a>

---

##### `connectionStatus`<sup>Required</sup> <a name="connectionStatus" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionStatus"></a>

```java
public java.lang.String getConnectionStatus();
```

- *Type:* java.lang.String

---

##### `localDomainInfo`<sup>Required</sup> <a name="localDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.localDomainInfo"></a>

```java
public OpensearchOutboundConnectionLocalDomainInfoOutputReference getLocalDomainInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference">OpensearchOutboundConnectionLocalDomainInfoOutputReference</a>

---

##### `remoteDomainInfo`<sup>Required</sup> <a name="remoteDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.remoteDomainInfo"></a>

```java
public OpensearchOutboundConnectionRemoteDomainInfoOutputReference getRemoteDomainInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference">OpensearchOutboundConnectionRemoteDomainInfoOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.timeouts"></a>

```java
public OpensearchOutboundConnectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference">OpensearchOutboundConnectionTimeoutsOutputReference</a>

---

##### `acceptConnectionInput`<sup>Optional</sup> <a name="acceptConnectionInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.acceptConnectionInput"></a>

```java
public java.lang.Object getAcceptConnectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `connectionAliasInput`<sup>Optional</sup> <a name="connectionAliasInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionAliasInput"></a>

```java
public java.lang.String getConnectionAliasInput();
```

- *Type:* java.lang.String

---

##### `connectionModeInput`<sup>Optional</sup> <a name="connectionModeInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionModeInput"></a>

```java
public java.lang.String getConnectionModeInput();
```

- *Type:* java.lang.String

---

##### `connectionPropertiesInput`<sup>Optional</sup> <a name="connectionPropertiesInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionPropertiesInput"></a>

```java
public OpensearchOutboundConnectionConnectionProperties getConnectionPropertiesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties">OpensearchOutboundConnectionConnectionProperties</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `localDomainInfoInput`<sup>Optional</sup> <a name="localDomainInfoInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.localDomainInfoInput"></a>

```java
public OpensearchOutboundConnectionLocalDomainInfo getLocalDomainInfoInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a>

---

##### `remoteDomainInfoInput`<sup>Optional</sup> <a name="remoteDomainInfoInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.remoteDomainInfoInput"></a>

```java
public OpensearchOutboundConnectionRemoteDomainInfo getRemoteDomainInfoInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a>

---

##### `acceptConnection`<sup>Required</sup> <a name="acceptConnection" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.acceptConnection"></a>

```java
public java.lang.Object getAcceptConnection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `connectionAlias`<sup>Required</sup> <a name="connectionAlias" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionAlias"></a>

```java
public java.lang.String getConnectionAlias();
```

- *Type:* java.lang.String

---

##### `connectionMode`<sup>Required</sup> <a name="connectionMode" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.connectionMode"></a>

```java
public java.lang.String getConnectionMode();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchOutboundConnectionConfig <a name="OpensearchOutboundConnectionConfig" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_outbound_connection.OpensearchOutboundConnectionConfig;

OpensearchOutboundConnectionConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .connectionAlias(java.lang.String)
    .localDomainInfo(OpensearchOutboundConnectionLocalDomainInfo)
    .remoteDomainInfo(OpensearchOutboundConnectionRemoteDomainInfo)
//  .acceptConnection(java.lang.Boolean)
//  .acceptConnection(IResolvable)
//  .connectionMode(java.lang.String)
//  .connectionProperties(OpensearchOutboundConnectionConnectionProperties)
//  .id(java.lang.String)
//  .timeouts(OpensearchOutboundConnectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connectionAlias">connectionAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#connection_alias OpensearchOutboundConnection#connection_alias}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.localDomainInfo">localDomainInfo</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a></code> | local_domain_info block. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.remoteDomainInfo">remoteDomainInfo</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a></code> | remote_domain_info block. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.acceptConnection">acceptConnection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#accept_connection OpensearchOutboundConnection#accept_connection}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connectionMode">connectionMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#connection_mode OpensearchOutboundConnection#connection_mode}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connectionProperties">connectionProperties</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties">OpensearchOutboundConnectionConnectionProperties</a></code> | connection_properties block. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#id OpensearchOutboundConnection#id}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionAlias`<sup>Required</sup> <a name="connectionAlias" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connectionAlias"></a>

```java
public java.lang.String getConnectionAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#connection_alias OpensearchOutboundConnection#connection_alias}.

---

##### `localDomainInfo`<sup>Required</sup> <a name="localDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.localDomainInfo"></a>

```java
public OpensearchOutboundConnectionLocalDomainInfo getLocalDomainInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a>

local_domain_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#local_domain_info OpensearchOutboundConnection#local_domain_info}

---

##### `remoteDomainInfo`<sup>Required</sup> <a name="remoteDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.remoteDomainInfo"></a>

```java
public OpensearchOutboundConnectionRemoteDomainInfo getRemoteDomainInfo();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a>

remote_domain_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#remote_domain_info OpensearchOutboundConnection#remote_domain_info}

---

##### `acceptConnection`<sup>Optional</sup> <a name="acceptConnection" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.acceptConnection"></a>

```java
public java.lang.Object getAcceptConnection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#accept_connection OpensearchOutboundConnection#accept_connection}.

---

##### `connectionMode`<sup>Optional</sup> <a name="connectionMode" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connectionMode"></a>

```java
public java.lang.String getConnectionMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#connection_mode OpensearchOutboundConnection#connection_mode}.

---

##### `connectionProperties`<sup>Optional</sup> <a name="connectionProperties" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.connectionProperties"></a>

```java
public OpensearchOutboundConnectionConnectionProperties getConnectionProperties();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties">OpensearchOutboundConnectionConnectionProperties</a>

connection_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#connection_properties OpensearchOutboundConnection#connection_properties}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#id OpensearchOutboundConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConfig.property.timeouts"></a>

```java
public OpensearchOutboundConnectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#timeouts OpensearchOutboundConnection#timeouts}

---

### OpensearchOutboundConnectionConnectionProperties <a name="OpensearchOutboundConnectionConnectionProperties" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_outbound_connection.OpensearchOutboundConnectionConnectionProperties;

OpensearchOutboundConnectionConnectionProperties.builder()
//  .crossClusterSearch(OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties.property.crossClusterSearch">crossClusterSearch</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch</a></code> | cross_cluster_search block. |

---

##### `crossClusterSearch`<sup>Optional</sup> <a name="crossClusterSearch" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties.property.crossClusterSearch"></a>

```java
public OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch getCrossClusterSearch();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch</a>

cross_cluster_search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#cross_cluster_search OpensearchOutboundConnection#cross_cluster_search}

---

### OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch <a name="OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_outbound_connection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch;

OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch.builder()
//  .skipUnavailable(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch.property.skipUnavailable">skipUnavailable</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#skip_unavailable OpensearchOutboundConnection#skip_unavailable}. |

---

##### `skipUnavailable`<sup>Optional</sup> <a name="skipUnavailable" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch.property.skipUnavailable"></a>

```java
public java.lang.String getSkipUnavailable();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#skip_unavailable OpensearchOutboundConnection#skip_unavailable}.

---

### OpensearchOutboundConnectionLocalDomainInfo <a name="OpensearchOutboundConnectionLocalDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_outbound_connection.OpensearchOutboundConnectionLocalDomainInfo;

OpensearchOutboundConnectionLocalDomainInfo.builder()
    .domainName(java.lang.String)
    .ownerId(java.lang.String)
    .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#domain_name OpensearchOutboundConnection#domain_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#owner_id OpensearchOutboundConnection#owner_id}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#region OpensearchOutboundConnection#region}. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#domain_name OpensearchOutboundConnection#domain_name}.

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#owner_id OpensearchOutboundConnection#owner_id}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#region OpensearchOutboundConnection#region}.

---

### OpensearchOutboundConnectionRemoteDomainInfo <a name="OpensearchOutboundConnectionRemoteDomainInfo" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_outbound_connection.OpensearchOutboundConnectionRemoteDomainInfo;

OpensearchOutboundConnectionRemoteDomainInfo.builder()
    .domainName(java.lang.String)
    .ownerId(java.lang.String)
    .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#domain_name OpensearchOutboundConnection#domain_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#owner_id OpensearchOutboundConnection#owner_id}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#region OpensearchOutboundConnection#region}. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#domain_name OpensearchOutboundConnection#domain_name}.

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#owner_id OpensearchOutboundConnection#owner_id}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#region OpensearchOutboundConnection#region}.

---

### OpensearchOutboundConnectionTimeouts <a name="OpensearchOutboundConnectionTimeouts" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_outbound_connection.OpensearchOutboundConnectionTimeouts;

OpensearchOutboundConnectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#create OpensearchOutboundConnection#create}. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#delete OpensearchOutboundConnection#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#create OpensearchOutboundConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.62.0/docs/resources/opensearch_outbound_connection#delete OpensearchOutboundConnection#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference <a name="OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_outbound_connection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference;

new OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.resetSkipUnavailable">resetSkipUnavailable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSkipUnavailable` <a name="resetSkipUnavailable" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.resetSkipUnavailable"></a>

```java
public void resetSkipUnavailable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.skipUnavailableInput">skipUnavailableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.skipUnavailable">skipUnavailable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `skipUnavailableInput`<sup>Optional</sup> <a name="skipUnavailableInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.skipUnavailableInput"></a>

```java
public java.lang.String getSkipUnavailableInput();
```

- *Type:* java.lang.String

---

##### `skipUnavailable`<sup>Required</sup> <a name="skipUnavailable" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.skipUnavailable"></a>

```java
public java.lang.String getSkipUnavailable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference.property.internalValue"></a>

```java
public OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch</a>

---


### OpensearchOutboundConnectionConnectionPropertiesOutputReference <a name="OpensearchOutboundConnectionConnectionPropertiesOutputReference" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_outbound_connection.OpensearchOutboundConnectionConnectionPropertiesOutputReference;

new OpensearchOutboundConnectionConnectionPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.putCrossClusterSearch">putCrossClusterSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.resetCrossClusterSearch">resetCrossClusterSearch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCrossClusterSearch` <a name="putCrossClusterSearch" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.putCrossClusterSearch"></a>

```java
public void putCrossClusterSearch(OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.putCrossClusterSearch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch</a>

---

##### `resetCrossClusterSearch` <a name="resetCrossClusterSearch" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.resetCrossClusterSearch"></a>

```java
public void resetCrossClusterSearch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.crossClusterSearch">crossClusterSearch</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.crossClusterSearchInput">crossClusterSearchInput</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties">OpensearchOutboundConnectionConnectionProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `crossClusterSearch`<sup>Required</sup> <a name="crossClusterSearch" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.crossClusterSearch"></a>

```java
public OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference getCrossClusterSearch();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearchOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `crossClusterSearchInput`<sup>Optional</sup> <a name="crossClusterSearchInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.crossClusterSearchInput"></a>

```java
public OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch getCrossClusterSearchInput();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch">OpensearchOutboundConnectionConnectionPropertiesCrossClusterSearch</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionPropertiesOutputReference.property.internalValue"></a>

```java
public OpensearchOutboundConnectionConnectionProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionConnectionProperties">OpensearchOutboundConnectionConnectionProperties</a>

---


### OpensearchOutboundConnectionLocalDomainInfoOutputReference <a name="OpensearchOutboundConnectionLocalDomainInfoOutputReference" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_outbound_connection.OpensearchOutboundConnectionLocalDomainInfoOutputReference;

new OpensearchOutboundConnectionLocalDomainInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.ownerIdInput">ownerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `ownerIdInput`<sup>Optional</sup> <a name="ownerIdInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.ownerIdInput"></a>

```java
public java.lang.String getOwnerIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfoOutputReference.property.internalValue"></a>

```java
public OpensearchOutboundConnectionLocalDomainInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionLocalDomainInfo">OpensearchOutboundConnectionLocalDomainInfo</a>

---


### OpensearchOutboundConnectionRemoteDomainInfoOutputReference <a name="OpensearchOutboundConnectionRemoteDomainInfoOutputReference" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_outbound_connection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference;

new OpensearchOutboundConnectionRemoteDomainInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.ownerIdInput">ownerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `ownerIdInput`<sup>Optional</sup> <a name="ownerIdInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.ownerIdInput"></a>

```java
public java.lang.String getOwnerIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfoOutputReference.property.internalValue"></a>

```java
public OpensearchOutboundConnectionRemoteDomainInfo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionRemoteDomainInfo">OpensearchOutboundConnectionRemoteDomainInfo</a>

---


### OpensearchOutboundConnectionTimeoutsOutputReference <a name="OpensearchOutboundConnectionTimeoutsOutputReference" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_outbound_connection.OpensearchOutboundConnectionTimeoutsOutputReference;

new OpensearchOutboundConnectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.opensearchOutboundConnection.OpensearchOutboundConnectionTimeouts">OpensearchOutboundConnectionTimeouts</a>

---



