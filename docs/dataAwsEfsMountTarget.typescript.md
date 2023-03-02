# `dataAwsEfsMountTarget` Submodule <a name="`dataAwsEfsMountTarget` Submodule" id="@cdktf/provider-aws.dataAwsEfsMountTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEfsMountTarget <a name="DataAwsEfsMountTarget" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target aws_efs_mount_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer"></a>

```typescript
import { dataAwsEfsMountTarget } from '@cdktf/provider-aws'

new dataAwsEfsMountTarget.DataAwsEfsMountTarget(scope: Construct, id: string, config?: DataAwsEfsMountTargetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig">DataAwsEfsMountTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig">DataAwsEfsMountTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.resetAccessPointId">resetAccessPointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.resetFileSystemId">resetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.resetMountTargetId">resetMountTargetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccessPointId` <a name="resetAccessPointId" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.resetAccessPointId"></a>

```typescript
public resetAccessPointId(): void
```

##### `resetFileSystemId` <a name="resetFileSystemId" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.resetFileSystemId"></a>

```typescript
public resetFileSystemId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMountTargetId` <a name="resetMountTargetId" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.resetMountTargetId"></a>

```typescript
public resetMountTargetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.isConstruct"></a>

```typescript
import { dataAwsEfsMountTarget } from '@cdktf/provider-aws'

dataAwsEfsMountTarget.DataAwsEfsMountTarget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.isTerraformElement"></a>

```typescript
import { dataAwsEfsMountTarget } from '@cdktf/provider-aws'

dataAwsEfsMountTarget.DataAwsEfsMountTarget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.isTerraformDataSource"></a>

```typescript
import { dataAwsEfsMountTarget } from '@cdktf/provider-aws'

dataAwsEfsMountTarget.DataAwsEfsMountTarget.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.availabilityZoneName">availabilityZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.fileSystemArn">fileSystemArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.mountTargetDnsName">mountTargetDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.accessPointIdInput">accessPointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.mountTargetIdInput">mountTargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.accessPointId">accessPointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.mountTargetId">mountTargetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

---

##### `availabilityZoneName`<sup>Required</sup> <a name="availabilityZoneName" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.availabilityZoneName"></a>

```typescript
public readonly availabilityZoneName: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `fileSystemArn`<sup>Required</sup> <a name="fileSystemArn" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.fileSystemArn"></a>

```typescript
public readonly fileSystemArn: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `mountTargetDnsName`<sup>Required</sup> <a name="mountTargetDnsName" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.mountTargetDnsName"></a>

```typescript
public readonly mountTargetDnsName: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `accessPointIdInput`<sup>Optional</sup> <a name="accessPointIdInput" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.accessPointIdInput"></a>

```typescript
public readonly accessPointIdInput: string;
```

- *Type:* string

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.fileSystemIdInput"></a>

```typescript
public readonly fileSystemIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mountTargetIdInput`<sup>Optional</sup> <a name="mountTargetIdInput" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.mountTargetIdInput"></a>

```typescript
public readonly mountTargetIdInput: string;
```

- *Type:* string

---

##### `accessPointId`<sup>Required</sup> <a name="accessPointId" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.accessPointId"></a>

```typescript
public readonly accessPointId: string;
```

- *Type:* string

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mountTargetId`<sup>Required</sup> <a name="mountTargetId" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.mountTargetId"></a>

```typescript
public readonly mountTargetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTarget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEfsMountTargetConfig <a name="DataAwsEfsMountTargetConfig" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.Initializer"></a>

```typescript
import { dataAwsEfsMountTarget } from '@cdktf/provider-aws'

const dataAwsEfsMountTargetConfig: dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.accessPointId">accessPointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target#access_point_id DataAwsEfsMountTarget#access_point_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target#file_system_id DataAwsEfsMountTarget#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target#id DataAwsEfsMountTarget#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.mountTargetId">mountTargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target#mount_target_id DataAwsEfsMountTarget#mount_target_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessPointId`<sup>Optional</sup> <a name="accessPointId" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.accessPointId"></a>

```typescript
public readonly accessPointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target#access_point_id DataAwsEfsMountTarget#access_point_id}.

---

##### `fileSystemId`<sup>Optional</sup> <a name="fileSystemId" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target#file_system_id DataAwsEfsMountTarget#file_system_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target#id DataAwsEfsMountTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mountTargetId`<sup>Optional</sup> <a name="mountTargetId" id="@cdktf/provider-aws.dataAwsEfsMountTarget.DataAwsEfsMountTargetConfig.property.mountTargetId"></a>

```typescript
public readonly mountTargetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/efs_mount_target#mount_target_id DataAwsEfsMountTarget#mount_target_id}.

---



