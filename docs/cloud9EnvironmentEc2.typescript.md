# `cloud9EnvironmentEc2` Submodule <a name="`cloud9EnvironmentEc2` Submodule" id="@cdktf/provider-aws.cloud9EnvironmentEc2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cloud9EnvironmentEc2 <a name="Cloud9EnvironmentEc2" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2 aws_cloud9_environment_ec2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer"></a>

```typescript
import { cloud9EnvironmentEc2 } from '@cdktf/provider-aws'

new cloud9EnvironmentEc2.Cloud9EnvironmentEc2(scope: Construct, id: string, config: Cloud9EnvironmentEc2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config">Cloud9EnvironmentEc2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config">Cloud9EnvironmentEc2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetAutomaticStopTimeMinutes">resetAutomaticStopTimeMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetConnectionType">resetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOwnerArn">resetOwnerArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAutomaticStopTimeMinutes` <a name="resetAutomaticStopTimeMinutes" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetAutomaticStopTimeMinutes"></a>

```typescript
public resetAutomaticStopTimeMinutes(): void
```

##### `resetConnectionType` <a name="resetConnectionType" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetConnectionType"></a>

```typescript
public resetConnectionType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageId` <a name="resetImageId" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetImageId"></a>

```typescript
public resetImageId(): void
```

##### `resetOwnerArn` <a name="resetOwnerArn" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOwnerArn"></a>

```typescript
public resetOwnerArn(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isConstruct"></a>

```typescript
import { cloud9EnvironmentEc2 } from '@cdktf/provider-aws'

cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformElement"></a>

```typescript
import { cloud9EnvironmentEc2 } from '@cdktf/provider-aws'

cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformResource"></a>

```typescript
import { cloud9EnvironmentEc2 } from '@cdktf/provider-aws'

cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutesInput">automaticStopTimeMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionTypeInput">connectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageIdInput">imageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArnInput">ownerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutes">automaticStopTimeMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArn">ownerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `automaticStopTimeMinutesInput`<sup>Optional</sup> <a name="automaticStopTimeMinutesInput" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutesInput"></a>

```typescript
public readonly automaticStopTimeMinutesInput: number;
```

- *Type:* number

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionTypeInput"></a>

```typescript
public readonly connectionTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageIdInput"></a>

```typescript
public readonly imageIdInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ownerArnInput`<sup>Optional</sup> <a name="ownerArnInput" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArnInput"></a>

```typescript
public readonly ownerArnInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `automaticStopTimeMinutes`<sup>Required</sup> <a name="automaticStopTimeMinutes" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutes"></a>

```typescript
public readonly automaticStopTimeMinutes: number;
```

- *Type:* number

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ownerArn`<sup>Required</sup> <a name="ownerArn" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArn"></a>

```typescript
public readonly ownerArn: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Cloud9EnvironmentEc2Config <a name="Cloud9EnvironmentEc2Config" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.Initializer"></a>

```typescript
import { cloud9EnvironmentEc2 } from '@cdktf/provider-aws'

const cloud9EnvironmentEc2Config: cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#instance_type Cloud9EnvironmentEc2#instance_type}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#name Cloud9EnvironmentEc2#name}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.automaticStopTimeMinutes">automaticStopTimeMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#automatic_stop_time_minutes Cloud9EnvironmentEc2#automatic_stop_time_minutes}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connectionType">connectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#connection_type Cloud9EnvironmentEc2#connection_type}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#description Cloud9EnvironmentEc2#description}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#id Cloud9EnvironmentEc2#id}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.imageId">imageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#image_id Cloud9EnvironmentEc2#image_id}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.ownerArn">ownerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#owner_arn Cloud9EnvironmentEc2#owner_arn}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#subnet_id Cloud9EnvironmentEc2#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#tags Cloud9EnvironmentEc2#tags}. |
| <code><a href="#@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#tags_all Cloud9EnvironmentEc2#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#instance_type Cloud9EnvironmentEc2#instance_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#name Cloud9EnvironmentEc2#name}.

---

##### `automaticStopTimeMinutes`<sup>Optional</sup> <a name="automaticStopTimeMinutes" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.automaticStopTimeMinutes"></a>

```typescript
public readonly automaticStopTimeMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#automatic_stop_time_minutes Cloud9EnvironmentEc2#automatic_stop_time_minutes}.

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#connection_type Cloud9EnvironmentEc2#connection_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#description Cloud9EnvironmentEc2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#id Cloud9EnvironmentEc2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#image_id Cloud9EnvironmentEc2#image_id}.

---

##### `ownerArn`<sup>Optional</sup> <a name="ownerArn" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.ownerArn"></a>

```typescript
public readonly ownerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#owner_arn Cloud9EnvironmentEc2#owner_arn}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#subnet_id Cloud9EnvironmentEc2#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#tags Cloud9EnvironmentEc2#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2#tags_all Cloud9EnvironmentEc2#tags_all}.

---



