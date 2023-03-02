# `guarddutyOrganizationConfiguration` Submodule <a name="`guarddutyOrganizationConfiguration` Submodule" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyOrganizationConfiguration <a name="GuarddutyOrganizationConfiguration" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration aws_guardduty_organization_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.Initializer"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/provider-aws'

new guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration(scope: Construct, id: string, config: GuarddutyOrganizationConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig">GuarddutyOrganizationConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig">GuarddutyOrganizationConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.putDatasources">putDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.resetDatasources">resetDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDatasources` <a name="putDatasources" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.putDatasources"></a>

```typescript
public putDatasources(value: GuarddutyOrganizationConfigurationDatasources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.putDatasources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources">GuarddutyOrganizationConfigurationDatasources</a>

---

##### `resetDatasources` <a name="resetDatasources" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.resetDatasources"></a>

```typescript
public resetDatasources(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isConstruct"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/provider-aws'

guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isTerraformElement"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/provider-aws'

guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isTerraformResource"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/provider-aws'

guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.datasources">datasources</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference">GuarddutyOrganizationConfigurationDatasourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.autoEnableInput">autoEnableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.datasourcesInput">datasourcesInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources">GuarddutyOrganizationConfigurationDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.detectorIdInput">detectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.autoEnable">autoEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.detectorId">detectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datasources`<sup>Required</sup> <a name="datasources" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.datasources"></a>

```typescript
public readonly datasources: GuarddutyOrganizationConfigurationDatasourcesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference">GuarddutyOrganizationConfigurationDatasourcesOutputReference</a>

---

##### `autoEnableInput`<sup>Optional</sup> <a name="autoEnableInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.autoEnableInput"></a>

```typescript
public readonly autoEnableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `datasourcesInput`<sup>Optional</sup> <a name="datasourcesInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.datasourcesInput"></a>

```typescript
public readonly datasourcesInput: GuarddutyOrganizationConfigurationDatasources;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources">GuarddutyOrganizationConfigurationDatasources</a>

---

##### `detectorIdInput`<sup>Optional</sup> <a name="detectorIdInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.detectorIdInput"></a>

```typescript
public readonly detectorIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `autoEnable`<sup>Required</sup> <a name="autoEnable" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.autoEnable"></a>

```typescript
public readonly autoEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyOrganizationConfigurationConfig <a name="GuarddutyOrganizationConfigurationConfig" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.Initializer"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/provider-aws'

const guarddutyOrganizationConfigurationConfig: guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.autoEnable">autoEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#auto_enable GuarddutyOrganizationConfiguration#auto_enable}. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.detectorId">detectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#detector_id GuarddutyOrganizationConfiguration#detector_id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.datasources">datasources</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources">GuarddutyOrganizationConfigurationDatasources</a></code> | datasources block. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#id GuarddutyOrganizationConfiguration#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoEnable`<sup>Required</sup> <a name="autoEnable" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.autoEnable"></a>

```typescript
public readonly autoEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#auto_enable GuarddutyOrganizationConfiguration#auto_enable}.

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#detector_id GuarddutyOrganizationConfiguration#detector_id}.

---

##### `datasources`<sup>Optional</sup> <a name="datasources" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.datasources"></a>

```typescript
public readonly datasources: GuarddutyOrganizationConfigurationDatasources;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources">GuarddutyOrganizationConfigurationDatasources</a>

datasources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#datasources GuarddutyOrganizationConfiguration#datasources}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#id GuarddutyOrganizationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### GuarddutyOrganizationConfigurationDatasources <a name="GuarddutyOrganizationConfigurationDatasources" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources.Initializer"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/provider-aws'

const guarddutyOrganizationConfigurationDatasources: guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetes">GuarddutyOrganizationConfigurationDatasourcesKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources.property.malwareProtection">malwareProtection</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtection">GuarddutyOrganizationConfigurationDatasourcesMalwareProtection</a></code> | malware_protection block. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources.property.s3Logs">s3Logs</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs">GuarddutyOrganizationConfigurationDatasourcesS3Logs</a></code> | s3_logs block. |

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources.property.kubernetes"></a>

```typescript
public readonly kubernetes: GuarddutyOrganizationConfigurationDatasourcesKubernetes;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetes">GuarddutyOrganizationConfigurationDatasourcesKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#kubernetes GuarddutyOrganizationConfiguration#kubernetes}

---

##### `malwareProtection`<sup>Optional</sup> <a name="malwareProtection" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources.property.malwareProtection"></a>

```typescript
public readonly malwareProtection: GuarddutyOrganizationConfigurationDatasourcesMalwareProtection;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtection">GuarddutyOrganizationConfigurationDatasourcesMalwareProtection</a>

malware_protection block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#malware_protection GuarddutyOrganizationConfiguration#malware_protection}

---

##### `s3Logs`<sup>Optional</sup> <a name="s3Logs" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources.property.s3Logs"></a>

```typescript
public readonly s3Logs: GuarddutyOrganizationConfigurationDatasourcesS3Logs;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs">GuarddutyOrganizationConfigurationDatasourcesS3Logs</a>

s3_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#s3_logs GuarddutyOrganizationConfiguration#s3_logs}

---

### GuarddutyOrganizationConfigurationDatasourcesKubernetes <a name="GuarddutyOrganizationConfigurationDatasourcesKubernetes" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetes.Initializer"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/provider-aws'

const guarddutyOrganizationConfigurationDatasourcesKubernetes: guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetes.property.auditLogs">auditLogs</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs">GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs</a></code> | audit_logs block. |

---

##### `auditLogs`<sup>Required</sup> <a name="auditLogs" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetes.property.auditLogs"></a>

```typescript
public readonly auditLogs: GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs">GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs</a>

audit_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#audit_logs GuarddutyOrganizationConfiguration#audit_logs}

---

### GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs <a name="GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs.Initializer"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/provider-aws'

const guarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs: guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#enable GuarddutyOrganizationConfiguration#enable}. |

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#enable GuarddutyOrganizationConfiguration#enable}.

---

### GuarddutyOrganizationConfigurationDatasourcesMalwareProtection <a name="GuarddutyOrganizationConfigurationDatasourcesMalwareProtection" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtection.Initializer"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/provider-aws'

const guarddutyOrganizationConfigurationDatasourcesMalwareProtection: guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtection.property.scanEc2InstanceWithFindings">scanEc2InstanceWithFindings</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a></code> | scan_ec2_instance_with_findings block. |

---

##### `scanEc2InstanceWithFindings`<sup>Required</sup> <a name="scanEc2InstanceWithFindings" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtection.property.scanEc2InstanceWithFindings"></a>

```typescript
public readonly scanEc2InstanceWithFindings: GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a>

scan_ec2_instance_with_findings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#scan_ec2_instance_with_findings GuarddutyOrganizationConfiguration#scan_ec2_instance_with_findings}

---

### GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings <a name="GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings.Initializer"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/provider-aws'

const guarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings: guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings.property.ebsVolumes">ebsVolumes</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a></code> | ebs_volumes block. |

---

##### `ebsVolumes`<sup>Required</sup> <a name="ebsVolumes" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings.property.ebsVolumes"></a>

```typescript
public readonly ebsVolumes: GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a>

ebs_volumes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#ebs_volumes GuarddutyOrganizationConfiguration#ebs_volumes}

---

### GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes <a name="GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes.Initializer"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/provider-aws'

const guarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes: guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes.property.autoEnable">autoEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#auto_enable GuarddutyOrganizationConfiguration#auto_enable}. |

---

##### `autoEnable`<sup>Required</sup> <a name="autoEnable" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes.property.autoEnable"></a>

```typescript
public readonly autoEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#auto_enable GuarddutyOrganizationConfiguration#auto_enable}.

---

### GuarddutyOrganizationConfigurationDatasourcesS3Logs <a name="GuarddutyOrganizationConfigurationDatasourcesS3Logs" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs.Initializer"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/provider-aws'

const guarddutyOrganizationConfigurationDatasourcesS3Logs: guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs.property.autoEnable">autoEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#auto_enable GuarddutyOrganizationConfiguration#auto_enable}. |

---

##### `autoEnable`<sup>Required</sup> <a name="autoEnable" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs.property.autoEnable"></a>

```typescript
public readonly autoEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_organization_configuration#auto_enable GuarddutyOrganizationConfiguration#auto_enable}.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference <a name="GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.Initializer"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/provider-aws'

new guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs">GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs">GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs</a>

---


### GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference <a name="GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.Initializer"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/provider-aws'

new guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.putAuditLogs">putAuditLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuditLogs` <a name="putAuditLogs" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.putAuditLogs"></a>

```typescript
public putAuditLogs(value: GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.putAuditLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs">GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.property.auditLogs">auditLogs</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference">GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.property.auditLogsInput">auditLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs">GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetes">GuarddutyOrganizationConfigurationDatasourcesKubernetes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auditLogs`<sup>Required</sup> <a name="auditLogs" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.property.auditLogs"></a>

```typescript
public readonly auditLogs: GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference">GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference</a>

---

##### `auditLogsInput`<sup>Optional</sup> <a name="auditLogsInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.property.auditLogsInput"></a>

```typescript
public readonly auditLogsInput: GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs">GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GuarddutyOrganizationConfigurationDatasourcesKubernetes;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetes">GuarddutyOrganizationConfigurationDatasourcesKubernetes</a>

---


### GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference <a name="GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.Initializer"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/provider-aws'

new guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.putScanEc2InstanceWithFindings">putScanEc2InstanceWithFindings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScanEc2InstanceWithFindings` <a name="putScanEc2InstanceWithFindings" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.putScanEc2InstanceWithFindings"></a>

```typescript
public putScanEc2InstanceWithFindings(value: GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.putScanEc2InstanceWithFindings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindings">scanEc2InstanceWithFindings</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindingsInput">scanEc2InstanceWithFindingsInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtection">GuarddutyOrganizationConfigurationDatasourcesMalwareProtection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scanEc2InstanceWithFindings`<sup>Required</sup> <a name="scanEc2InstanceWithFindings" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindings"></a>

```typescript
public readonly scanEc2InstanceWithFindings: GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference</a>

---

##### `scanEc2InstanceWithFindingsInput`<sup>Optional</sup> <a name="scanEc2InstanceWithFindingsInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindingsInput"></a>

```typescript
public readonly scanEc2InstanceWithFindingsInput: GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GuarddutyOrganizationConfigurationDatasourcesMalwareProtection;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtection">GuarddutyOrganizationConfigurationDatasourcesMalwareProtection</a>

---


### GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference <a name="GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.Initializer"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/provider-aws'

new guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.autoEnableInput">autoEnableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.autoEnable">autoEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoEnableInput`<sup>Optional</sup> <a name="autoEnableInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.autoEnableInput"></a>

```typescript
public readonly autoEnableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoEnable`<sup>Required</sup> <a name="autoEnable" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.autoEnable"></a>

```typescript
public readonly autoEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a>

---


### GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference <a name="GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/provider-aws'

new guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.putEbsVolumes">putEbsVolumes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbsVolumes` <a name="putEbsVolumes" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.putEbsVolumes"></a>

```typescript
public putEbsVolumes(value: GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.putEbsVolumes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumes">ebsVolumes</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumesInput">ebsVolumesInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ebsVolumes`<sup>Required</sup> <a name="ebsVolumes" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumes"></a>

```typescript
public readonly ebsVolumes: GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference</a>

---

##### `ebsVolumesInput`<sup>Optional</sup> <a name="ebsVolumesInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumesInput"></a>

```typescript
public readonly ebsVolumesInput: GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a>

---


### GuarddutyOrganizationConfigurationDatasourcesOutputReference <a name="GuarddutyOrganizationConfigurationDatasourcesOutputReference" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.Initializer"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/provider-aws'

new guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.putKubernetes">putKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.putMalwareProtection">putMalwareProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.putS3Logs">putS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.resetKubernetes">resetKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.resetMalwareProtection">resetMalwareProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.resetS3Logs">resetS3Logs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKubernetes` <a name="putKubernetes" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.putKubernetes"></a>

```typescript
public putKubernetes(value: GuarddutyOrganizationConfigurationDatasourcesKubernetes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.putKubernetes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetes">GuarddutyOrganizationConfigurationDatasourcesKubernetes</a>

---

##### `putMalwareProtection` <a name="putMalwareProtection" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.putMalwareProtection"></a>

```typescript
public putMalwareProtection(value: GuarddutyOrganizationConfigurationDatasourcesMalwareProtection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.putMalwareProtection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtection">GuarddutyOrganizationConfigurationDatasourcesMalwareProtection</a>

---

##### `putS3Logs` <a name="putS3Logs" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.putS3Logs"></a>

```typescript
public putS3Logs(value: GuarddutyOrganizationConfigurationDatasourcesS3Logs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.putS3Logs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs">GuarddutyOrganizationConfigurationDatasourcesS3Logs</a>

---

##### `resetKubernetes` <a name="resetKubernetes" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.resetKubernetes"></a>

```typescript
public resetKubernetes(): void
```

##### `resetMalwareProtection` <a name="resetMalwareProtection" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.resetMalwareProtection"></a>

```typescript
public resetMalwareProtection(): void
```

##### `resetS3Logs` <a name="resetS3Logs" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.resetS3Logs"></a>

```typescript
public resetS3Logs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference">GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.malwareProtection">malwareProtection</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.s3Logs">s3Logs</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference">GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.kubernetesInput">kubernetesInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetes">GuarddutyOrganizationConfigurationDatasourcesKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.malwareProtectionInput">malwareProtectionInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtection">GuarddutyOrganizationConfigurationDatasourcesMalwareProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.s3LogsInput">s3LogsInput</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs">GuarddutyOrganizationConfigurationDatasourcesS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources">GuarddutyOrganizationConfigurationDatasources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kubernetes`<sup>Required</sup> <a name="kubernetes" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.kubernetes"></a>

```typescript
public readonly kubernetes: GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference">GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference</a>

---

##### `malwareProtection`<sup>Required</sup> <a name="malwareProtection" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.malwareProtection"></a>

```typescript
public readonly malwareProtection: GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference">GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference</a>

---

##### `s3Logs`<sup>Required</sup> <a name="s3Logs" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.s3Logs"></a>

```typescript
public readonly s3Logs: GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference">GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference</a>

---

##### `kubernetesInput`<sup>Optional</sup> <a name="kubernetesInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.kubernetesInput"></a>

```typescript
public readonly kubernetesInput: GuarddutyOrganizationConfigurationDatasourcesKubernetes;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesKubernetes">GuarddutyOrganizationConfigurationDatasourcesKubernetes</a>

---

##### `malwareProtectionInput`<sup>Optional</sup> <a name="malwareProtectionInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.malwareProtectionInput"></a>

```typescript
public readonly malwareProtectionInput: GuarddutyOrganizationConfigurationDatasourcesMalwareProtection;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesMalwareProtection">GuarddutyOrganizationConfigurationDatasourcesMalwareProtection</a>

---

##### `s3LogsInput`<sup>Optional</sup> <a name="s3LogsInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.s3LogsInput"></a>

```typescript
public readonly s3LogsInput: GuarddutyOrganizationConfigurationDatasourcesS3Logs;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs">GuarddutyOrganizationConfigurationDatasourcesS3Logs</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GuarddutyOrganizationConfigurationDatasources;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources">GuarddutyOrganizationConfigurationDatasources</a>

---


### GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference <a name="GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.Initializer"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/provider-aws'

new guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.autoEnableInput">autoEnableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.autoEnable">autoEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs">GuarddutyOrganizationConfigurationDatasourcesS3Logs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoEnableInput`<sup>Optional</sup> <a name="autoEnableInput" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.autoEnableInput"></a>

```typescript
public readonly autoEnableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoEnable`<sup>Required</sup> <a name="autoEnable" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.autoEnable"></a>

```typescript
public readonly autoEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GuarddutyOrganizationConfigurationDatasourcesS3Logs;
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs">GuarddutyOrganizationConfigurationDatasourcesS3Logs</a>

---



