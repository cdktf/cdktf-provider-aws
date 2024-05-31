# `redshiftDataShareConsumerAssociation` Submodule <a name="`redshiftDataShareConsumerAssociation` Submodule" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftDataShareConsumerAssociation <a name="RedshiftDataShareConsumerAssociation" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/redshift_data_share_consumer_association aws_redshift_data_share_consumer_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_data_share_consumer_association.RedshiftDataShareConsumerAssociation;

RedshiftDataShareConsumerAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .dataShareArn(java.lang.String)
//  .allowWrites(java.lang.Boolean)
//  .allowWrites(IResolvable)
//  .associateEntireAccount(java.lang.Boolean)
//  .associateEntireAccount(IResolvable)
//  .consumerArn(java.lang.String)
//  .consumerRegion(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.dataShareArn">dataShareArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/redshift_data_share_consumer_association#data_share_arn RedshiftDataShareConsumerAssociation#data_share_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.allowWrites">allowWrites</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/redshift_data_share_consumer_association#allow_writes RedshiftDataShareConsumerAssociation#allow_writes}. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.associateEntireAccount">associateEntireAccount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/redshift_data_share_consumer_association#associate_entire_account RedshiftDataShareConsumerAssociation#associate_entire_account}. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.consumerArn">consumerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/redshift_data_share_consumer_association#consumer_arn RedshiftDataShareConsumerAssociation#consumer_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.consumerRegion">consumerRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/redshift_data_share_consumer_association#consumer_region RedshiftDataShareConsumerAssociation#consumer_region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataShareArn`<sup>Required</sup> <a name="dataShareArn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.dataShareArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/redshift_data_share_consumer_association#data_share_arn RedshiftDataShareConsumerAssociation#data_share_arn}.

---

##### `allowWrites`<sup>Optional</sup> <a name="allowWrites" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.allowWrites"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/redshift_data_share_consumer_association#allow_writes RedshiftDataShareConsumerAssociation#allow_writes}.

---

##### `associateEntireAccount`<sup>Optional</sup> <a name="associateEntireAccount" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.associateEntireAccount"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/redshift_data_share_consumer_association#associate_entire_account RedshiftDataShareConsumerAssociation#associate_entire_account}.

---

##### `consumerArn`<sup>Optional</sup> <a name="consumerArn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.consumerArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/redshift_data_share_consumer_association#consumer_arn RedshiftDataShareConsumerAssociation#consumer_arn}.

---

##### `consumerRegion`<sup>Optional</sup> <a name="consumerRegion" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.Initializer.parameter.consumerRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/redshift_data_share_consumer_association#consumer_region RedshiftDataShareConsumerAssociation#consumer_region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetAllowWrites">resetAllowWrites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetAssociateEntireAccount">resetAssociateEntireAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetConsumerArn">resetConsumerArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetConsumerRegion">resetConsumerRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowWrites` <a name="resetAllowWrites" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetAllowWrites"></a>

```java
public void resetAllowWrites()
```

##### `resetAssociateEntireAccount` <a name="resetAssociateEntireAccount" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetAssociateEntireAccount"></a>

```java
public void resetAssociateEntireAccount()
```

##### `resetConsumerArn` <a name="resetConsumerArn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetConsumerArn"></a>

```java
public void resetConsumerArn()
```

##### `resetConsumerRegion` <a name="resetConsumerRegion" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.resetConsumerRegion"></a>

```java
public void resetConsumerRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RedshiftDataShareConsumerAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_data_share_consumer_association.RedshiftDataShareConsumerAssociation;

RedshiftDataShareConsumerAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_data_share_consumer_association.RedshiftDataShareConsumerAssociation;

RedshiftDataShareConsumerAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_data_share_consumer_association.RedshiftDataShareConsumerAssociation;

RedshiftDataShareConsumerAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_data_share_consumer_association.RedshiftDataShareConsumerAssociation;

RedshiftDataShareConsumerAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RedshiftDataShareConsumerAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a RedshiftDataShareConsumerAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RedshiftDataShareConsumerAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RedshiftDataShareConsumerAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/redshift_data_share_consumer_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the RedshiftDataShareConsumerAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.managedBy">managedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.producerArn">producerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.allowWritesInput">allowWritesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.associateEntireAccountInput">associateEntireAccountInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerArnInput">consumerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerRegionInput">consumerRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dataShareArnInput">dataShareArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.allowWrites">allowWrites</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.associateEntireAccount">associateEntireAccount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerArn">consumerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerRegion">consumerRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dataShareArn">dataShareArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedBy`<sup>Required</sup> <a name="managedBy" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.managedBy"></a>

```java
public java.lang.String getManagedBy();
```

- *Type:* java.lang.String

---

##### `producerArn`<sup>Required</sup> <a name="producerArn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.producerArn"></a>

```java
public java.lang.String getProducerArn();
```

- *Type:* java.lang.String

---

##### `allowWritesInput`<sup>Optional</sup> <a name="allowWritesInput" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.allowWritesInput"></a>

```java
public java.lang.Object getAllowWritesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `associateEntireAccountInput`<sup>Optional</sup> <a name="associateEntireAccountInput" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.associateEntireAccountInput"></a>

```java
public java.lang.Object getAssociateEntireAccountInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `consumerArnInput`<sup>Optional</sup> <a name="consumerArnInput" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerArnInput"></a>

```java
public java.lang.String getConsumerArnInput();
```

- *Type:* java.lang.String

---

##### `consumerRegionInput`<sup>Optional</sup> <a name="consumerRegionInput" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerRegionInput"></a>

```java
public java.lang.String getConsumerRegionInput();
```

- *Type:* java.lang.String

---

##### `dataShareArnInput`<sup>Optional</sup> <a name="dataShareArnInput" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dataShareArnInput"></a>

```java
public java.lang.String getDataShareArnInput();
```

- *Type:* java.lang.String

---

##### `allowWrites`<sup>Required</sup> <a name="allowWrites" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.allowWrites"></a>

```java
public java.lang.Object getAllowWrites();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `associateEntireAccount`<sup>Required</sup> <a name="associateEntireAccount" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.associateEntireAccount"></a>

```java
public java.lang.Object getAssociateEntireAccount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `consumerArn`<sup>Required</sup> <a name="consumerArn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerArn"></a>

```java
public java.lang.String getConsumerArn();
```

- *Type:* java.lang.String

---

##### `consumerRegion`<sup>Required</sup> <a name="consumerRegion" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.consumerRegion"></a>

```java
public java.lang.String getConsumerRegion();
```

- *Type:* java.lang.String

---

##### `dataShareArn`<sup>Required</sup> <a name="dataShareArn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.dataShareArn"></a>

```java
public java.lang.String getDataShareArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftDataShareConsumerAssociationConfig <a name="RedshiftDataShareConsumerAssociationConfig" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.redshift_data_share_consumer_association.RedshiftDataShareConsumerAssociationConfig;

RedshiftDataShareConsumerAssociationConfig.builder()
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
    .dataShareArn(java.lang.String)
//  .allowWrites(java.lang.Boolean)
//  .allowWrites(IResolvable)
//  .associateEntireAccount(java.lang.Boolean)
//  .associateEntireAccount(IResolvable)
//  .consumerArn(java.lang.String)
//  .consumerRegion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.dataShareArn">dataShareArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/redshift_data_share_consumer_association#data_share_arn RedshiftDataShareConsumerAssociation#data_share_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.allowWrites">allowWrites</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/redshift_data_share_consumer_association#allow_writes RedshiftDataShareConsumerAssociation#allow_writes}. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.associateEntireAccount">associateEntireAccount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/redshift_data_share_consumer_association#associate_entire_account RedshiftDataShareConsumerAssociation#associate_entire_account}. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.consumerArn">consumerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/redshift_data_share_consumer_association#consumer_arn RedshiftDataShareConsumerAssociation#consumer_arn}. |
| <code><a href="#@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.consumerRegion">consumerRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/redshift_data_share_consumer_association#consumer_region RedshiftDataShareConsumerAssociation#consumer_region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataShareArn`<sup>Required</sup> <a name="dataShareArn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.dataShareArn"></a>

```java
public java.lang.String getDataShareArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/redshift_data_share_consumer_association#data_share_arn RedshiftDataShareConsumerAssociation#data_share_arn}.

---

##### `allowWrites`<sup>Optional</sup> <a name="allowWrites" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.allowWrites"></a>

```java
public java.lang.Object getAllowWrites();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/redshift_data_share_consumer_association#allow_writes RedshiftDataShareConsumerAssociation#allow_writes}.

---

##### `associateEntireAccount`<sup>Optional</sup> <a name="associateEntireAccount" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.associateEntireAccount"></a>

```java
public java.lang.Object getAssociateEntireAccount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/redshift_data_share_consumer_association#associate_entire_account RedshiftDataShareConsumerAssociation#associate_entire_account}.

---

##### `consumerArn`<sup>Optional</sup> <a name="consumerArn" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.consumerArn"></a>

```java
public java.lang.String getConsumerArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/redshift_data_share_consumer_association#consumer_arn RedshiftDataShareConsumerAssociation#consumer_arn}.

---

##### `consumerRegion`<sup>Optional</sup> <a name="consumerRegion" id="@cdktf/provider-aws.redshiftDataShareConsumerAssociation.RedshiftDataShareConsumerAssociationConfig.property.consumerRegion"></a>

```java
public java.lang.String getConsumerRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/redshift_data_share_consumer_association#consumer_region RedshiftDataShareConsumerAssociation#consumer_region}.

---



