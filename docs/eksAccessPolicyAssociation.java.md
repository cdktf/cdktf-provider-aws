# `eksAccessPolicyAssociation` Submodule <a name="`eksAccessPolicyAssociation` Submodule" id="@cdktf/provider-aws.eksAccessPolicyAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksAccessPolicyAssociation <a name="EksAccessPolicyAssociation" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association aws_eks_access_policy_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_access_policy_association.EksAccessPolicyAssociation;

EksAccessPolicyAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .accessScope(EksAccessPolicyAssociationAccessScope)
    .clusterName(java.lang.String)
    .policyArn(java.lang.String)
    .principalArn(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(EksAccessPolicyAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.accessScope">accessScope</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope">EksAccessPolicyAssociationAccessScope</a></code> | access_scope block. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#cluster_name EksAccessPolicyAssociation#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.policyArn">policyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#policy_arn EksAccessPolicyAssociation#policy_arn}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.principalArn">principalArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#principal_arn EksAccessPolicyAssociation#principal_arn}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#id EksAccessPolicyAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts">EksAccessPolicyAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessScope`<sup>Required</sup> <a name="accessScope" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.accessScope"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope">EksAccessPolicyAssociationAccessScope</a>

access_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#access_scope EksAccessPolicyAssociation#access_scope}

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#cluster_name EksAccessPolicyAssociation#cluster_name}.

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.policyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#policy_arn EksAccessPolicyAssociation#policy_arn}.

---

##### `principalArn`<sup>Required</sup> <a name="principalArn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.principalArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#principal_arn EksAccessPolicyAssociation#principal_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#id EksAccessPolicyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts">EksAccessPolicyAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#timeouts EksAccessPolicyAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.putAccessScope">putAccessScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessScope` <a name="putAccessScope" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.putAccessScope"></a>

```java
public void putAccessScope(EksAccessPolicyAssociationAccessScope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.putAccessScope.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope">EksAccessPolicyAssociationAccessScope</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.putTimeouts"></a>

```java
public void putTimeouts(EksAccessPolicyAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts">EksAccessPolicyAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EksAccessPolicyAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_access_policy_association.EksAccessPolicyAssociation;

EksAccessPolicyAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_access_policy_association.EksAccessPolicyAssociation;

EksAccessPolicyAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_access_policy_association.EksAccessPolicyAssociation;

EksAccessPolicyAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_access_policy_association.EksAccessPolicyAssociation;

EksAccessPolicyAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EksAccessPolicyAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a EksAccessPolicyAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EksAccessPolicyAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EksAccessPolicyAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the EksAccessPolicyAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.accessScope">accessScope</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference">EksAccessPolicyAssociationAccessScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.associatedAt">associatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference">EksAccessPolicyAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.accessScopeInput">accessScopeInput</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope">EksAccessPolicyAssociationAccessScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.policyArnInput">policyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.principalArnInput">principalArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts">EksAccessPolicyAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.policyArn">policyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.principalArn">principalArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessScope`<sup>Required</sup> <a name="accessScope" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.accessScope"></a>

```java
public EksAccessPolicyAssociationAccessScopeOutputReference getAccessScope();
```

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference">EksAccessPolicyAssociationAccessScopeOutputReference</a>

---

##### `associatedAt`<sup>Required</sup> <a name="associatedAt" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.associatedAt"></a>

```java
public java.lang.String getAssociatedAt();
```

- *Type:* java.lang.String

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.timeouts"></a>

```java
public EksAccessPolicyAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference">EksAccessPolicyAssociationTimeoutsOutputReference</a>

---

##### `accessScopeInput`<sup>Optional</sup> <a name="accessScopeInput" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.accessScopeInput"></a>

```java
public EksAccessPolicyAssociationAccessScope getAccessScopeInput();
```

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope">EksAccessPolicyAssociationAccessScope</a>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `policyArnInput`<sup>Optional</sup> <a name="policyArnInput" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.policyArnInput"></a>

```java
public java.lang.String getPolicyArnInput();
```

- *Type:* java.lang.String

---

##### `principalArnInput`<sup>Optional</sup> <a name="principalArnInput" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.principalArnInput"></a>

```java
public java.lang.String getPrincipalArnInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts">EksAccessPolicyAssociationTimeouts</a>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.policyArn"></a>

```java
public java.lang.String getPolicyArn();
```

- *Type:* java.lang.String

---

##### `principalArn`<sup>Required</sup> <a name="principalArn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.principalArn"></a>

```java
public java.lang.String getPrincipalArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EksAccessPolicyAssociationAccessScope <a name="EksAccessPolicyAssociationAccessScope" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_access_policy_association.EksAccessPolicyAssociationAccessScope;

EksAccessPolicyAssociationAccessScope.builder()
    .type(java.lang.String)
//  .namespaces(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#type EksAccessPolicyAssociation#type}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope.property.namespaces">namespaces</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#namespaces EksAccessPolicyAssociation#namespaces}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#type EksAccessPolicyAssociation#type}.

---

##### `namespaces`<sup>Optional</sup> <a name="namespaces" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope.property.namespaces"></a>

```java
public java.util.List<java.lang.String> getNamespaces();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#namespaces EksAccessPolicyAssociation#namespaces}.

---

### EksAccessPolicyAssociationConfig <a name="EksAccessPolicyAssociationConfig" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_access_policy_association.EksAccessPolicyAssociationConfig;

EksAccessPolicyAssociationConfig.builder()
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
    .accessScope(EksAccessPolicyAssociationAccessScope)
    .clusterName(java.lang.String)
    .policyArn(java.lang.String)
    .principalArn(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(EksAccessPolicyAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.accessScope">accessScope</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope">EksAccessPolicyAssociationAccessScope</a></code> | access_scope block. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#cluster_name EksAccessPolicyAssociation#cluster_name}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.policyArn">policyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#policy_arn EksAccessPolicyAssociation#policy_arn}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.principalArn">principalArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#principal_arn EksAccessPolicyAssociation#principal_arn}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#id EksAccessPolicyAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts">EksAccessPolicyAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessScope`<sup>Required</sup> <a name="accessScope" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.accessScope"></a>

```java
public EksAccessPolicyAssociationAccessScope getAccessScope();
```

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope">EksAccessPolicyAssociationAccessScope</a>

access_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#access_scope EksAccessPolicyAssociation#access_scope}

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#cluster_name EksAccessPolicyAssociation#cluster_name}.

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.policyArn"></a>

```java
public java.lang.String getPolicyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#policy_arn EksAccessPolicyAssociation#policy_arn}.

---

##### `principalArn`<sup>Required</sup> <a name="principalArn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.principalArn"></a>

```java
public java.lang.String getPrincipalArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#principal_arn EksAccessPolicyAssociation#principal_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#id EksAccessPolicyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationConfig.property.timeouts"></a>

```java
public EksAccessPolicyAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts">EksAccessPolicyAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#timeouts EksAccessPolicyAssociation#timeouts}

---

### EksAccessPolicyAssociationTimeouts <a name="EksAccessPolicyAssociationTimeouts" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_access_policy_association.EksAccessPolicyAssociationTimeouts;

EksAccessPolicyAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#create EksAccessPolicyAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#delete EksAccessPolicyAssociation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#create EksAccessPolicyAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/eks_access_policy_association#delete EksAccessPolicyAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EksAccessPolicyAssociationAccessScopeOutputReference <a name="EksAccessPolicyAssociationAccessScopeOutputReference" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_access_policy_association.EksAccessPolicyAssociationAccessScopeOutputReference;

new EksAccessPolicyAssociationAccessScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.resetNamespaces">resetNamespaces</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespaces` <a name="resetNamespaces" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.resetNamespaces"></a>

```java
public void resetNamespaces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.namespacesInput">namespacesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.namespaces">namespaces</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope">EksAccessPolicyAssociationAccessScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namespacesInput`<sup>Optional</sup> <a name="namespacesInput" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.namespacesInput"></a>

```java
public java.util.List<java.lang.String> getNamespacesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.namespaces"></a>

```java
public java.util.List<java.lang.String> getNamespaces();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScopeOutputReference.property.internalValue"></a>

```java
public EksAccessPolicyAssociationAccessScope getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationAccessScope">EksAccessPolicyAssociationAccessScope</a>

---


### EksAccessPolicyAssociationTimeoutsOutputReference <a name="EksAccessPolicyAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.eks_access_policy_association.EksAccessPolicyAssociationTimeoutsOutputReference;

new EksAccessPolicyAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts">EksAccessPolicyAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.eksAccessPolicyAssociation.EksAccessPolicyAssociationTimeouts">EksAccessPolicyAssociationTimeouts</a>

---



