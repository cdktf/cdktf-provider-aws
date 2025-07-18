# `opensearchAuthorizeVpcEndpointAccess` Submodule <a name="`opensearchAuthorizeVpcEndpointAccess` Submodule" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchAuthorizeVpcEndpointAccess <a name="OpensearchAuthorizeVpcEndpointAccess" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_authorize_vpc_endpoint_access aws_opensearch_authorize_vpc_endpoint_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_authorize_vpc_endpoint_access.OpensearchAuthorizeVpcEndpointAccess;

OpensearchAuthorizeVpcEndpointAccess.Builder.create(Construct scope, java.lang.String id)
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
    .account(java.lang.String)
    .domainName(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.account">account</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_authorize_vpc_endpoint_access#account OpensearchAuthorizeVpcEndpointAccess#account}. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_authorize_vpc_endpoint_access#domain_name OpensearchAuthorizeVpcEndpointAccess#domain_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.account"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_authorize_vpc_endpoint_access#account OpensearchAuthorizeVpcEndpointAccess#account}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_authorize_vpc_endpoint_access#domain_name OpensearchAuthorizeVpcEndpointAccess#domain_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_authorize_vpc_endpoint_access#region OpensearchAuthorizeVpcEndpointAccess#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpensearchAuthorizeVpcEndpointAccess resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_authorize_vpc_endpoint_access.OpensearchAuthorizeVpcEndpointAccess;

OpensearchAuthorizeVpcEndpointAccess.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_authorize_vpc_endpoint_access.OpensearchAuthorizeVpcEndpointAccess;

OpensearchAuthorizeVpcEndpointAccess.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_authorize_vpc_endpoint_access.OpensearchAuthorizeVpcEndpointAccess;

OpensearchAuthorizeVpcEndpointAccess.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_authorize_vpc_endpoint_access.OpensearchAuthorizeVpcEndpointAccess;

OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OpensearchAuthorizeVpcEndpointAccess resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OpensearchAuthorizeVpcEndpointAccess to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OpensearchAuthorizeVpcEndpointAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_authorize_vpc_endpoint_access#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OpensearchAuthorizeVpcEndpointAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.authorizedPrincipal">authorizedPrincipal</a></code> | <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList">OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.accountInput">accountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.account">account</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorizedPrincipal`<sup>Required</sup> <a name="authorizedPrincipal" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.authorizedPrincipal"></a>

```java
public OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList getAuthorizedPrincipal();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList">OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList</a>

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.accountInput"></a>

```java
public java.lang.String getAccountInput();
```

- *Type:* java.lang.String

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.account"></a>

```java
public java.lang.String getAccount();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccess.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal <a name="OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_authorize_vpc_endpoint_access.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal;

OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal.builder()
    .build();
```


### OpensearchAuthorizeVpcEndpointAccessConfig <a name="OpensearchAuthorizeVpcEndpointAccessConfig" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_authorize_vpc_endpoint_access.OpensearchAuthorizeVpcEndpointAccessConfig;

OpensearchAuthorizeVpcEndpointAccessConfig.builder()
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
    .account(java.lang.String)
    .domainName(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.account">account</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_authorize_vpc_endpoint_access#account OpensearchAuthorizeVpcEndpointAccess#account}. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_authorize_vpc_endpoint_access#domain_name OpensearchAuthorizeVpcEndpointAccess#domain_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.account"></a>

```java
public java.lang.String getAccount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_authorize_vpc_endpoint_access#account OpensearchAuthorizeVpcEndpointAccess#account}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_authorize_vpc_endpoint_access#domain_name OpensearchAuthorizeVpcEndpointAccess#domain_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/opensearch_authorize_vpc_endpoint_access#region OpensearchAuthorizeVpcEndpointAccess#region}

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList <a name="OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_authorize_vpc_endpoint_access.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList;

new OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.get"></a>

```java
public OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference <a name="OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.opensearch_authorize_vpc_endpoint_access.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference;

new OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.principalType">principalType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal">OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.principalType"></a>

```java
public java.lang.String getPrincipalType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference.property.internalValue"></a>

```java
public OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchAuthorizeVpcEndpointAccess.OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal">OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal</a>

---



