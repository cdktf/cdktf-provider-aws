# `dxGatewayAssociationProposal` Submodule <a name="`dxGatewayAssociationProposal` Submodule" id="@cdktf/provider-aws.dxGatewayAssociationProposal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxGatewayAssociationProposal <a name="DxGatewayAssociationProposal" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal aws_dx_gateway_association_proposal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_gateway_association_proposal.DxGatewayAssociationProposal;

DxGatewayAssociationProposal.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .associatedGatewayId(java.lang.String)
    .dxGatewayId(java.lang.String)
    .dxGatewayOwnerAccountId(java.lang.String)
//  .allowedPrefixes(java.util.List<java.lang.String>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.associatedGatewayId">associatedGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#associated_gateway_id DxGatewayAssociationProposal#associated_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.dxGatewayId">dxGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_id DxGatewayAssociationProposal#dx_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.dxGatewayOwnerAccountId">dxGatewayOwnerAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_owner_account_id DxGatewayAssociationProposal#dx_gateway_owner_account_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.allowedPrefixes">allowedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#allowed_prefixes DxGatewayAssociationProposal#allowed_prefixes}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#id DxGatewayAssociationProposal#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `associatedGatewayId`<sup>Required</sup> <a name="associatedGatewayId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.associatedGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#associated_gateway_id DxGatewayAssociationProposal#associated_gateway_id}.

---

##### `dxGatewayId`<sup>Required</sup> <a name="dxGatewayId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.dxGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_id DxGatewayAssociationProposal#dx_gateway_id}.

---

##### `dxGatewayOwnerAccountId`<sup>Required</sup> <a name="dxGatewayOwnerAccountId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.dxGatewayOwnerAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_owner_account_id DxGatewayAssociationProposal#dx_gateway_owner_account_id}.

---

##### `allowedPrefixes`<sup>Optional</sup> <a name="allowedPrefixes" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.allowedPrefixes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#allowed_prefixes DxGatewayAssociationProposal#allowed_prefixes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#id DxGatewayAssociationProposal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetAllowedPrefixes">resetAllowedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAllowedPrefixes` <a name="resetAllowedPrefixes" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetAllowedPrefixes"></a>

```java
public void resetAllowedPrefixes()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_gateway_association_proposal.DxGatewayAssociationProposal;

DxGatewayAssociationProposal.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_gateway_association_proposal.DxGatewayAssociationProposal;

DxGatewayAssociationProposal.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_gateway_association_proposal.DxGatewayAssociationProposal;

DxGatewayAssociationProposal.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayOwnerAccountId">associatedGatewayOwnerAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayType">associatedGatewayType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.allowedPrefixesInput">allowedPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayIdInput">associatedGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayIdInput">dxGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayOwnerAccountIdInput">dxGatewayOwnerAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.allowedPrefixes">allowedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayId">associatedGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayId">dxGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayOwnerAccountId">dxGatewayOwnerAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `associatedGatewayOwnerAccountId`<sup>Required</sup> <a name="associatedGatewayOwnerAccountId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayOwnerAccountId"></a>

```java
public java.lang.String getAssociatedGatewayOwnerAccountId();
```

- *Type:* java.lang.String

---

##### `associatedGatewayType`<sup>Required</sup> <a name="associatedGatewayType" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayType"></a>

```java
public java.lang.String getAssociatedGatewayType();
```

- *Type:* java.lang.String

---

##### `allowedPrefixesInput`<sup>Optional</sup> <a name="allowedPrefixesInput" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.allowedPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `associatedGatewayIdInput`<sup>Optional</sup> <a name="associatedGatewayIdInput" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayIdInput"></a>

```java
public java.lang.String getAssociatedGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `dxGatewayIdInput`<sup>Optional</sup> <a name="dxGatewayIdInput" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayIdInput"></a>

```java
public java.lang.String getDxGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `dxGatewayOwnerAccountIdInput`<sup>Optional</sup> <a name="dxGatewayOwnerAccountIdInput" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayOwnerAccountIdInput"></a>

```java
public java.lang.String getDxGatewayOwnerAccountIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `allowedPrefixes`<sup>Required</sup> <a name="allowedPrefixes" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.allowedPrefixes"></a>

```java
public java.util.List<java.lang.String> getAllowedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `associatedGatewayId`<sup>Required</sup> <a name="associatedGatewayId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.associatedGatewayId"></a>

```java
public java.lang.String getAssociatedGatewayId();
```

- *Type:* java.lang.String

---

##### `dxGatewayId`<sup>Required</sup> <a name="dxGatewayId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayId"></a>

```java
public java.lang.String getDxGatewayId();
```

- *Type:* java.lang.String

---

##### `dxGatewayOwnerAccountId`<sup>Required</sup> <a name="dxGatewayOwnerAccountId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.dxGatewayOwnerAccountId"></a>

```java
public java.lang.String getDxGatewayOwnerAccountId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposal.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DxGatewayAssociationProposalConfig <a name="DxGatewayAssociationProposalConfig" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.dx_gateway_association_proposal.DxGatewayAssociationProposalConfig;

DxGatewayAssociationProposalConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .associatedGatewayId(java.lang.String)
    .dxGatewayId(java.lang.String)
    .dxGatewayOwnerAccountId(java.lang.String)
//  .allowedPrefixes(java.util.List<java.lang.String>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.associatedGatewayId">associatedGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#associated_gateway_id DxGatewayAssociationProposal#associated_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dxGatewayId">dxGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_id DxGatewayAssociationProposal#dx_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dxGatewayOwnerAccountId">dxGatewayOwnerAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_owner_account_id DxGatewayAssociationProposal#dx_gateway_owner_account_id}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.allowedPrefixes">allowedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#allowed_prefixes DxGatewayAssociationProposal#allowed_prefixes}. |
| <code><a href="#@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#id DxGatewayAssociationProposal#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `associatedGatewayId`<sup>Required</sup> <a name="associatedGatewayId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.associatedGatewayId"></a>

```java
public java.lang.String getAssociatedGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#associated_gateway_id DxGatewayAssociationProposal#associated_gateway_id}.

---

##### `dxGatewayId`<sup>Required</sup> <a name="dxGatewayId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dxGatewayId"></a>

```java
public java.lang.String getDxGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_id DxGatewayAssociationProposal#dx_gateway_id}.

---

##### `dxGatewayOwnerAccountId`<sup>Required</sup> <a name="dxGatewayOwnerAccountId" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.dxGatewayOwnerAccountId"></a>

```java
public java.lang.String getDxGatewayOwnerAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#dx_gateway_owner_account_id DxGatewayAssociationProposal#dx_gateway_owner_account_id}.

---

##### `allowedPrefixes`<sup>Optional</sup> <a name="allowedPrefixes" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.allowedPrefixes"></a>

```java
public java.util.List<java.lang.String> getAllowedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#allowed_prefixes DxGatewayAssociationProposal#allowed_prefixes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dxGatewayAssociationProposal.DxGatewayAssociationProposalConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal#id DxGatewayAssociationProposal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



