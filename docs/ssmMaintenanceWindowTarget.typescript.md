# `ssmMaintenanceWindowTarget` Submodule <a name="`ssmMaintenanceWindowTarget` Submodule" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmMaintenanceWindowTarget <a name="SsmMaintenanceWindowTarget" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target aws_ssm_maintenance_window_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTarget } from '@cdktf/provider-aws'

new ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget(scope: Construct, id: string, config: SsmMaintenanceWindowTargetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig">SsmMaintenanceWindowTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig">SsmMaintenanceWindowTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.putTargets">putTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetOwnerInformation">resetOwnerInformation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTargets` <a name="putTargets" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.putTargets"></a>

```typescript
public putTargets(value: IResolvable | SsmMaintenanceWindowTargetTargets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.putTargets.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOwnerInformation` <a name="resetOwnerInformation" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetOwnerInformation"></a>

```typescript
public resetOwnerInformation(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isConstruct"></a>

```typescript
import { ssmMaintenanceWindowTarget } from '@cdktf/provider-aws'

ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isTerraformElement"></a>

```typescript
import { ssmMaintenanceWindowTarget } from '@cdktf/provider-aws'

ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isTerraformResource"></a>

```typescript
import { ssmMaintenanceWindowTarget } from '@cdktf/provider-aws'

ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.targets">targets</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList">SsmMaintenanceWindowTargetTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.ownerInformationInput">ownerInformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.targetsInput">targetsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.windowIdInput">windowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.ownerInformation">ownerInformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.windowId">windowId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.targets"></a>

```typescript
public readonly targets: SsmMaintenanceWindowTargetTargetsList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList">SsmMaintenanceWindowTargetTargetsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `ownerInformationInput`<sup>Optional</sup> <a name="ownerInformationInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.ownerInformationInput"></a>

```typescript
public readonly ownerInformationInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.targetsInput"></a>

```typescript
public readonly targetsInput: IResolvable | SsmMaintenanceWindowTargetTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>[]

---

##### `windowIdInput`<sup>Optional</sup> <a name="windowIdInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.windowIdInput"></a>

```typescript
public readonly windowIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ownerInformation`<sup>Required</sup> <a name="ownerInformation" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.ownerInformation"></a>

```typescript
public readonly ownerInformation: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `windowId`<sup>Required</sup> <a name="windowId" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.windowId"></a>

```typescript
public readonly windowId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmMaintenanceWindowTargetConfig <a name="SsmMaintenanceWindowTargetConfig" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTarget } from '@cdktf/provider-aws'

const ssmMaintenanceWindowTargetConfig: ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#resource_type SsmMaintenanceWindowTarget#resource_type}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.targets">targets</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>[]</code> | targets block. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.windowId">windowId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#window_id SsmMaintenanceWindowTarget#window_id}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#description SsmMaintenanceWindowTarget#description}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#id SsmMaintenanceWindowTarget#id}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#name SsmMaintenanceWindowTarget#name}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.ownerInformation">ownerInformation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#owner_information SsmMaintenanceWindowTarget#owner_information}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#resource_type SsmMaintenanceWindowTarget#resource_type}.

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.targets"></a>

```typescript
public readonly targets: IResolvable | SsmMaintenanceWindowTargetTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>[]

targets block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#targets SsmMaintenanceWindowTarget#targets}

---

##### `windowId`<sup>Required</sup> <a name="windowId" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.windowId"></a>

```typescript
public readonly windowId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#window_id SsmMaintenanceWindowTarget#window_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#description SsmMaintenanceWindowTarget#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#id SsmMaintenanceWindowTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#name SsmMaintenanceWindowTarget#name}.

---

##### `ownerInformation`<sup>Optional</sup> <a name="ownerInformation" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.ownerInformation"></a>

```typescript
public readonly ownerInformation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#owner_information SsmMaintenanceWindowTarget#owner_information}.

---

### SsmMaintenanceWindowTargetTargets <a name="SsmMaintenanceWindowTargetTargets" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTarget } from '@cdktf/provider-aws'

const ssmMaintenanceWindowTargetTargets: ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#key SsmMaintenanceWindowTarget#key}. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#values SsmMaintenanceWindowTarget#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#key SsmMaintenanceWindowTarget#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target#values SsmMaintenanceWindowTarget#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmMaintenanceWindowTargetTargetsList <a name="SsmMaintenanceWindowTargetTargetsList" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTarget } from '@cdktf/provider-aws'

new ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.get"></a>

```typescript
public get(index: number): SsmMaintenanceWindowTargetTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmMaintenanceWindowTargetTargets[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>[]

---


### SsmMaintenanceWindowTargetTargetsOutputReference <a name="SsmMaintenanceWindowTargetTargetsOutputReference" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer"></a>

```typescript
import { ssmMaintenanceWindowTarget } from '@cdktf/provider-aws'

new ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsmMaintenanceWindowTargetTargets | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a> | cdktf.IResolvable

---



