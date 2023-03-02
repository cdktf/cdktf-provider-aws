# `kinesisanalyticsv2ApplicationSnapshot` Submodule <a name="`kinesisanalyticsv2ApplicationSnapshot` Submodule" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Kinesisanalyticsv2ApplicationSnapshot <a name="Kinesisanalyticsv2ApplicationSnapshot" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot aws_kinesisanalyticsv2_application_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer"></a>

```typescript
import { kinesisanalyticsv2ApplicationSnapshot } from '@cdktf/provider-aws'

new kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot(scope: Construct, id: string, config: Kinesisanalyticsv2ApplicationSnapshotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig">Kinesisanalyticsv2ApplicationSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig">Kinesisanalyticsv2ApplicationSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.putTimeouts"></a>

```typescript
public putTimeouts(value: Kinesisanalyticsv2ApplicationSnapshotTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts">Kinesisanalyticsv2ApplicationSnapshotTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isConstruct"></a>

```typescript
import { kinesisanalyticsv2ApplicationSnapshot } from '@cdktf/provider-aws'

kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformElement"></a>

```typescript
import { kinesisanalyticsv2ApplicationSnapshot } from '@cdktf/provider-aws'

kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformResource"></a>

```typescript
import { kinesisanalyticsv2ApplicationSnapshot } from '@cdktf/provider-aws'

kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.applicationVersionId">applicationVersionId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.snapshotCreationTimestamp">snapshotCreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference">Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.applicationNameInput">applicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.snapshotNameInput">snapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts">Kinesisanalyticsv2ApplicationSnapshotTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.applicationName">applicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.snapshotName">snapshotName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationVersionId`<sup>Required</sup> <a name="applicationVersionId" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.applicationVersionId"></a>

```typescript
public readonly applicationVersionId: number;
```

- *Type:* number

---

##### `snapshotCreationTimestamp`<sup>Required</sup> <a name="snapshotCreationTimestamp" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.snapshotCreationTimestamp"></a>

```typescript
public readonly snapshotCreationTimestamp: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.timeouts"></a>

```typescript
public readonly timeouts: Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference">Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference</a>

---

##### `applicationNameInput`<sup>Optional</sup> <a name="applicationNameInput" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.applicationNameInput"></a>

```typescript
public readonly applicationNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.snapshotNameInput"></a>

```typescript
public readonly snapshotNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: Kinesisanalyticsv2ApplicationSnapshotTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts">Kinesisanalyticsv2ApplicationSnapshotTimeouts</a> | cdktf.IResolvable

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Kinesisanalyticsv2ApplicationSnapshotConfig <a name="Kinesisanalyticsv2ApplicationSnapshotConfig" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.Initializer"></a>

```typescript
import { kinesisanalyticsv2ApplicationSnapshot } from '@cdktf/provider-aws'

const kinesisanalyticsv2ApplicationSnapshotConfig: kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.applicationName">applicationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#application_name Kinesisanalyticsv2ApplicationSnapshot#application_name}. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.snapshotName">snapshotName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#snapshot_name Kinesisanalyticsv2ApplicationSnapshot#snapshot_name}. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#id Kinesisanalyticsv2ApplicationSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts">Kinesisanalyticsv2ApplicationSnapshotTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#application_name Kinesisanalyticsv2ApplicationSnapshot#application_name}.

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.snapshotName"></a>

```typescript
public readonly snapshotName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#snapshot_name Kinesisanalyticsv2ApplicationSnapshot#snapshot_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#id Kinesisanalyticsv2ApplicationSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Kinesisanalyticsv2ApplicationSnapshotTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts">Kinesisanalyticsv2ApplicationSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#timeouts Kinesisanalyticsv2ApplicationSnapshot#timeouts}

---

### Kinesisanalyticsv2ApplicationSnapshotTimeouts <a name="Kinesisanalyticsv2ApplicationSnapshotTimeouts" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts.Initializer"></a>

```typescript
import { kinesisanalyticsv2ApplicationSnapshot } from '@cdktf/provider-aws'

const kinesisanalyticsv2ApplicationSnapshotTimeouts: kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#create Kinesisanalyticsv2ApplicationSnapshot#create}. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#delete Kinesisanalyticsv2ApplicationSnapshot#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#create Kinesisanalyticsv2ApplicationSnapshot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot#delete Kinesisanalyticsv2ApplicationSnapshot#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference <a name="Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.Initializer"></a>

```typescript
import { kinesisanalyticsv2ApplicationSnapshot } from '@cdktf/provider-aws'

new kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts">Kinesisanalyticsv2ApplicationSnapshotTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Kinesisanalyticsv2ApplicationSnapshotTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.kinesisanalyticsv2ApplicationSnapshot.Kinesisanalyticsv2ApplicationSnapshotTimeouts">Kinesisanalyticsv2ApplicationSnapshotTimeouts</a> | cdktf.IResolvable

---



